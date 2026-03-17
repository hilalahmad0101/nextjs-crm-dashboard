"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getRoles({
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
          { description: { contains: search, mode: "insensitive" as any } },
        ],
      }
    : {};

  const [roles, totalCount] = await Promise.all([
    prisma.systemRole.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { users: true },
        },
        permissions: {
          include: { permission: true },
        },
      },
    }),
    prisma.systemRole.count({ where }),
  ]);

  return {
    roles: roles.map((role) => ({
      ...role,
      userCount: role._count.users,
      permissions: role.permissions.map((rp) => rp.permission),
    })),
    totalPages: Math.ceil(totalCount / pageSize),
    totalCount,
  };
}

export async function createRole(data: {
  name: string;
  description: string;
  permissionIds?: string[];
}) {
  const { permissionIds, ...roleData } = data;
  const role = await prisma.systemRole.create({
    data: {
      ...roleData,
      permissions: permissionIds
        ? {
            create: permissionIds.map((id) => ({
              permission: { connect: { id } },
            })),
          }
        : undefined,
    },
  });
  revalidatePath("/roles");
  return role;
}

export async function updateRole(
  id: string,
  data: { name?: string; description?: string; permissionIds?: string[] }
) {
  const { permissionIds, ...roleData } = data;

  const role = await prisma.systemRole.update({
    where: { id },
    data: {
      ...roleData,
      permissions: permissionIds
        ? {
            deleteMany: {},
            create: permissionIds.map((pid) => ({
              permission: { connect: { id: pid } },
            })),
          }
        : undefined,
    },
  });
  revalidatePath("/roles");
  return role;
}

export async function getRole(id: string) {
  const role = await prisma.systemRole.findUnique({
    where: { id },
    include: {
      permissions: {
        include: { permission: true },
      },
    },
  });

  if (!role) return null;

  return {
    ...role,
    permissionIds: role.permissions.map((rp) => rp.permissionId),
  };
}

export async function getPermissions() {
  return prisma.permission.findMany({
    orderBy: [{ module: "asc" }, { name: "asc" }],
  });
}

export async function deleteRole(id: string) {
  await prisma.systemRole.delete({
    where: { id },
  });
  revalidatePath("/roles");
}
