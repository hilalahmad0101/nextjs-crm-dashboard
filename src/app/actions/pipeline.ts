"use server";

import prisma from "@/lib/prisma";
import { LeadStatus } from "@prisma/client";

export async function getPipelineStats() {
    // Get all leads that haven't been lost
    const leads = await prisma.lead.findMany({
        where: {
            NOT: { status: LeadStatus.LOST }
        },
        select: {
            id: true,
            name: true,
            company: true,
            status: true,
            value: true,
            createdAt: true,
            updatedAt: true,
            priority: true,
        }
    });

    const stages = [
        { key: LeadStatus.NEW, label: "Discovery", color: "bg-blue-500" },
        { key: LeadStatus.QUALIFIED, label: "Qualified", color: "bg-emerald-500" },
        { key: LeadStatus.PROPOSAL, label: "Proposal", color: "bg-purple-500" },
        { key: LeadStatus.NEGOTIATION, label: "Negotiation", color: "bg-amber-500" },
        { key: LeadStatus.CLOSED, label: "Closing", color: "bg-slate-500" },
    ];

    const pipelineData = stages.map(stage => {
        const stageLeads = leads.filter(l => l.status === stage.key);
        const totalValue = stageLeads.reduce((sum, l) => sum + (l.value || 0), 0);
        return {
            ...stage,
            count: stageLeads.length,
            value: totalValue,
            leads: stageLeads,
        };
    });

    const totalPipelineValue = pipelineData.reduce((sum, s) => sum + s.value, 0);

    // Calculate conversion rates (simple version for now)
    // In a real app, this would be based on historical transitions
    const conversionRates = pipelineData.slice(0, -1).map((stage, i) => {
        const nextStage = pipelineData[i + 1];
        // This is a placeholder logic: in a real funnel, we'd compare flow
        // For now, let's just show some realistic-looking drops or calculate based on current distribution
        return {
            from: stage.label,
            to: nextStage.label,
            rate: stage.count > 0 ? (nextStage.count / stage.count) * 100 : 0
        };
    });

    return {
        pipelineData,
        totalPipelineValue,
        conversionRates,
        allActiveLeads: leads,
    };
}

export async function updateLeadStatus(leadId: string, status: LeadStatus) {
    try {
        await prisma.lead.update({
            where: { id: leadId },
            data: { status }
        });
        return { success: true };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
