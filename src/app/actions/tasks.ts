"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { TaskStatus, Priority } from "@prisma/client";

export async function getTasks({
  userId,
  status,
  priority,
}: {
  userId?: string;
  status?: TaskStatus;
  priority?: Priority;
} = {}) {
  try {
    const where: any = {};
    if (userId) where.userId = userId;
    if (status) where.status = status;
    if (priority) where.priority = priority;

    const tasks = await prisma.task.findMany({
      where,
      include: {
        user: {
          select: { name: true, image: true }
        }
      },
      orderBy: [
        { status: 'asc' }, // This might need custom logic since it's an enum, but usually TODO < IN_PROGRESS < DONE
        { dueDate: 'asc' },
        { priority: 'desc' }
      ]
    });

    // Stats
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === TaskStatus.DONE).length;
    const pending = total - completed;
    const highPriority = tasks.filter(t => t.priority === Priority.HIGH && t.status !== TaskStatus.DONE).length;

    return { 
      success: true, 
      tasks, 
      stats: { total, completed, pending, highPriority } 
    };
  } catch (error: any) {
    console.error("Failed to fetch tasks:", error);
    return { success: false, error: error.message };
  }
}

export async function createTask(data: {
  title: string;
  status?: TaskStatus;
  priority?: Priority;
  dueDate?: Date | null;
  userId: string;
}) {
  try {
    const task = await prisma.task.create({
      data: {
        ...data,
        status: data.status || TaskStatus.TODO,
        priority: data.priority || Priority.MEDIUM,
      },
    });
    revalidatePath("/tasks");
    return { success: true, task };
  } catch (error: any) {
    console.error("Failed to create task:", error);
    return { success: false, error: error.message };
  }
}

export async function updateTask(
  id: string,
  data: {
    title?: string;
    status?: TaskStatus;
    priority?: Priority;
    dueDate?: Date | null;
  }
) {
  try {
    const task = await prisma.task.update({
      where: { id },
      data,
    });
    revalidatePath("/tasks");
    return { success: true, task };
  } catch (error: any) {
    console.error("Failed to update task:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteTask(id: string) {
  try {
    await prisma.task.delete({
      where: { id },
    });
    revalidatePath("/tasks");
    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete task:", error);
    return { success: false, error: error.message };
  }
}
