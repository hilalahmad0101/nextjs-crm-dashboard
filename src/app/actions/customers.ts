"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getCustomers({
  page = 1,
  pageSize = 10,
  search = "",
}: {
  page?: number;
  pageSize?: number;
  search?: string;
} = {}) {
  const skip = (page - 1) * pageSize;

  const where = search
    ? {
        OR: [
          { name: { contains: search, mode: "insensitive" as any } },
          { email: { contains: search, mode: "insensitive" as any } },
          { company: { contains: search, mode: "insensitive" as any } },
        ],
      }
    : {};

  const [customers, totalCount] = await Promise.all([
    prisma.customer.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { deals: true },
        },
        deals: {
            select: { value: true }
        }
      },
    }),
    prisma.customer.count({ where }),
  ]);

  return {
    customers: customers.map((c) => ({
      ...c,
      ltv: c.deals.reduce((sum, deal) => sum + deal.value, 0),
      dealCount: c._count.deals,
    })),
    totalPages: Math.ceil(totalCount / pageSize),
    totalCount,
  };
}

export async function getCustomer(id: string) {
  return await prisma.customer.findUnique({
    where: { id },
    include: {
      deals: true,
    },
  });
}

export async function createCustomer(data: {
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  website?: string;
  companySize?: string;
  jobTitle?: string;
  address?: string;
  status?: string;
  source?: string;
}) {
  try {
    const customer = await prisma.customer.create({
      data,
    });
    revalidatePath("/customers");
    return { success: true, customer };
  } catch (error: any) {
    console.error("Failed to create customer:", error);
    return { success: false, error: error.message };
  }
}

export async function updateCustomer(
  id: string,
  data: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    industry?: string;
    website?: string;
    companySize?: string;
    jobTitle?: string;
    address?: string;
    status?: string;
    source?: string;
  }
) {
  try {
    const customer = await prisma.customer.update({
      where: { id },
      data,
    });
    revalidatePath("/customers");
    return { success: true, customer };
  } catch (error: any) {
    console.error("Failed to update customer:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteCustomer(id: string) {
  try {
    await prisma.customer.delete({
      where: { id },
    });
    revalidatePath("/customers");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete customer:", error);
    return { success: false, error: error.message };
  }
}

export async function getCustomerStats() {
    const [totalCount, activeCount, newThisMonth] = await Promise.all([
        prisma.customer.count(),
        prisma.customer.count({ where: { status: "Active" } }),
        prisma.customer.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
                }
            }
        })
    ]);

    const allDeals = await prisma.deal.findMany({
        select: { value: true }
    });
    const totalLtv = allDeals.reduce((sum, deal) => sum + deal.value, 0);
    const avgDealSize = allDeals.length > 0 ? totalLtv / allDeals.length : 0;

    return {
        totalCount,
        activeCount,
        newThisMonth,
        totalLtv,
        avgDealSize
    };
}
