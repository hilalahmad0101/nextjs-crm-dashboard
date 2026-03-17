import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function testGetUsers() {
    try {
        const users = await prisma.user.findMany({
            include: {
                systemRole: true
            }
        });
        console.log("Success! Found users:", users.length);
        if (users.length > 0) {
            console.log("First user email:", users[0].email);
            console.log("First user systemRole:", users[0].systemRole?.name);
        }
    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await prisma.$disconnect();
        await pool.end();
    }
}

testGetUsers();
