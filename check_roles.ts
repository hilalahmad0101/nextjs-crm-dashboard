import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function checkRoles() {
    try {
        const roles = await prisma.systemRole.findMany({
            take: 5
        });
        console.log("Existing Roles:", roles.map(r => r.name));
    } catch (error) {
        console.error("Failed to check roles:", error);
    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}

checkRoles();
