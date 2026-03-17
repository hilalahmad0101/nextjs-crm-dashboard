"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

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

export async function getUsers({
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
        ],
      }
    : {};

  const [users, totalCount] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      include: {
        systemRole: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    users: users.map((u) => ({
      ...u,
      role: u.systemRole, // Map back for UI compatibility
    })),
    totalPages: Math.ceil(totalCount / pageSize),
    totalCount,
  };
}

export async function createUser(data: {
  email: string;
  name: string;
  password?: string;
  roleId?: string;
}) {
  try {
    // Sanitize roleId - handle possible "$undefined" string or empty strings
    const sanitizedRoleId =
      data.roleId === "$undefined" || !data.roleId ? undefined : data.roleId;

    // Use the flattened API methods (proven to exist in debug_auth.ts)
    // @ts-ignore - plugin types can be inconsistent
    const result = await auth.api.signUpEmail({
      headers: await headers(),
      body: {
        email: data.email,
        password: data.password || "TempPassword123!",
        name: data.name,
        roleId: sanitizedRoleId,
      },
    });
    
    
    // // createUser({
    // //   headers: await headers(),
    // //   body: {
    // //     email: data.email,
    // //     password: data.password || "TempPassword123!",
    // //     name: data.name,
    // //     roleId: sanitizedRoleId,
    // //   },
    // });

    revalidatePath("/users");
    return result;
  } catch (error: any) {
    console.error("Better Auth User Creation Failed:", error);
    // Throw so the component's try-catch can catch it
    throw new Error(error.message || "Failed to create user");
  }
}

export async function updateUser(id: string, data: {
  name?: string;
  roleId?: string;
  role?: string;
}) {
  try {
    const sanitizedRoleId =
      data.roleId === "$undefined" || !data.roleId ? undefined : data.roleId;

    // @ts-ignore - Better Auth types can be tricky
    const result = await auth.api.updateUser({
      headers: await headers(),
      body: {
        name:data.name,
        roleId: sanitizedRoleId,
      }
    });
    
    
    // adminUpdateUser({
    //     headers: await headers(),
    //     body: {
    //         userId: id,
    //         data: {
    //             name: data.name,
    //             roleId: sanitizedRoleId,
    //             role: data.role // This is the "admin" flag for Better Auth
    //         }
    //     }
    // });

    revalidatePath("/users");
    return result;
  } catch (error: any) {
    console.error("Better Auth User Update Failed:", error);
    throw new Error(error.message || "Failed to update user");
  }
}

export async function deleteUser(id: string) {
    await prisma.user.delete({
        where: { id },
    });
    revalidatePath("/users");
}
