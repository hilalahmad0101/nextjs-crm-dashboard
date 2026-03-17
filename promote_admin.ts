import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function promote() {
    const email = "hilal@gmail.com";
    try {
        // Find the "Admin" role first
        const adminRole = await prisma.systemRole.findFirst({
            where: { name: 'Admin' }
        });

        if (!adminRole) {
            console.error("Critical: 'Admin' role not found in SystemRole table. Please seed the database first.");
            return;
        }

        const user = await prisma.user.update({
            where: { email },
            data: { 
                role: "admin", // Better Auth Admin plugin flag
                roleId: adminRole.id // Our SystemRole relation
            }
        });
        console.log(`User ${user.email} is now a Super Admin!`);
    } catch (e) {
        console.error("Promotion failed. Error:", e.message);
        console.error("Make sure you have registered first at /register");
    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}

promote();
