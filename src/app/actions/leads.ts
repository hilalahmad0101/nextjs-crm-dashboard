"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { LeadStatus, Priority } from "@prisma/client";

export async function getLeads({
  page = 1,
  pageSize = 10,
  search = "",
  status,
}: {
  page?: number;
  pageSize?: number;
  search?: string;
  status?: LeadStatus;
} = {}) {
  const skip = (page - 1) * pageSize;

  const where: any = {
    AND: [
      search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { email: { contains: search, mode: "insensitive" } },
              { company: { contains: search, mode: "insensitive" } },
            ],
          }
        : {},
      status ? { status } : {},
    ],
  };

  const [leads, totalCount] = await Promise.all([
    prisma.lead.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: { name: true, email: true }
        }
      }
    }),
    prisma.lead.count({ where }),
  ]);

  return {
    leads,
    totalPages: Math.ceil(totalCount / pageSize),
    totalCount,
  };
}

export async function getLead(id: string) {
  return await prisma.lead.findUnique({
    where: { id },
    include: {
      user: {
        select: { name: true, email: true }
      }
    }
  });
}

export async function createLead(data: {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  status?: LeadStatus;
  priority?: Priority;
  source?: string;
  value?: number;
  userId: string;
}) {
  try {
    const lead = await prisma.lead.create({
      data,
    });
    revalidatePath("/leads");
    return { success: true, lead };
  } catch (error: any) {
    console.error("Failed to create lead:", error);
    return { success: false, error: error.message };
  }
}

export async function updateLead(
  id: string,
  data: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    status?: LeadStatus;
    priority?: Priority;
    source?: string;
    value?: number;
    userId?: string;
  }
) {
  try {
    const lead = await prisma.lead.update({
      where: { id },
      data,
    });
    revalidatePath("/leads");
    return { success: true, lead };
  } catch (error: any) {
    console.error("Failed to update lead:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({
      where: { id },
    });
    revalidatePath("/leads");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete lead:", error);
    return { success: false, error: error.message };
  }
}

export async function getLeadStats() {
    const [totalCount, newLeads, qualifiedLeads, totalValue] = await Promise.all([
        prisma.lead.count(),
        prisma.lead.count({ where: { status: LeadStatus.NEW } }),
        prisma.lead.count({ where: { status: LeadStatus.QUALIFIED } }),
        prisma.lead.aggregate({
            _sum: { value: true }
        })
    ]);

    return {
        totalCount,
        newLeads,
        qualifiedLeads,
        totalValue: totalValue._sum.value || 0,
    };
}

export async function convertLeadToCustomer(leadId: string) {
    try {
        const lead = await prisma.lead.findUnique({
            where: { id: leadId }
        });

        if (!lead) throw new Error("Lead not found");

        // Start transaction
        return await prisma.$transaction(async (tx) => {
            // Create Customer
            const customer = await tx.customer.create({
                data: {
                    name: lead.name,
                    email: lead.email,
                    phone: lead.phone,
                    company: lead.company,
                    source: lead.source,
                    status: "Active",
                }
            });

            // Create an initial Deal for this customer
            await tx.deal.create({
                data: {
                    title: `${lead.name} - Initial Deal`,
                    value: lead.value || 0,
                    customerId: customer.id,
                    status: "OPEN"
                }
            });

            // Update Lead status to CLOSED
            await tx.lead.update({
                where: { id: leadId },
                data: { status: LeadStatus.CLOSED }
            });

            revalidatePath("/customers");
            revalidatePath("/leads");
            revalidatePath("/deals");
            return { success: true, customerId: customer.id };
        });
    } catch (error: any) {
        console.error("Failed to convert lead:", error);
        return { success: false, error: error.message };
    }
}
