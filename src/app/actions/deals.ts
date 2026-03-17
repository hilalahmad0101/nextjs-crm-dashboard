"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { DealStatus } from "@prisma/client";

export async function getDeals() {
  try {
    const deals = await prisma.deal.findMany({
      include: {
        customer: {
          select: {
            name: true,
            company: true,
          }
        }
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    const stats = {
      totalValue: deals.reduce((sum, deal) => sum + deal.value, 0),
      activeDeals: deals.filter(deal => deal.status === DealStatus.OPEN).length,
      avgDealSize: deals.length > 0 ? deals.reduce((sum, deal) => sum + deal.value, 0) / deals.length : 0,
      winRate: deals.length > 0 ? (deals.filter(deal => deal.status === DealStatus.WON).length / deals.length) * 100 : 0,
    };

    // Grouping by status for a Kanban-like view if needed, 
    // although DealStatus only has OPEN, WON, LOST.
    // Maybe we should map them to the same stages as Leads or just handle them as results.
    
    return { success: true, deals, stats };
  } catch (error: any) {
    console.error("Failed to fetch deals:", error);
    return { success: false, error: error.message };
  }
}

export async function createDeal(data: {
  title: string;
  value: number;
  customerId: string;
  status?: DealStatus;
}) {
  try {
    const deal = await prisma.deal.create({
      data: {
        ...data,
        status: data.status || DealStatus.OPEN,
      },
    });
    revalidatePath("/deals");
    return { success: true, deal };
  } catch (error: any) {
    console.error("Failed to create deal:", error);
    return { success: false, error: error.message };
  }
}

export async function updateDealStatus(dealId: string, status: DealStatus) {
  try {
    const deal = await prisma.deal.update({
      where: { id: dealId },
      data: { status },
    });
    revalidatePath("/deals");
    return { success: true, deal };
  } catch (error: any) {
    console.error("Failed to update deal status:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteDeal(id: string) {
  try {
    await prisma.deal.delete({
      where: { id },
    });
    revalidatePath("/deals");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete deal:", error);
    return { success: false, error: error.message };
  }
}
