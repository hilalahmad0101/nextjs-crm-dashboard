import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = "hilal@gmail.com";
  const name = "Hilal Ahmad";
  const password = "hilalahmad"; // Note: This script won't hash it correctly for Better Auth unless we use their internals
  
  // Actually, let's just create the user record with role admin.
  // Then the user can use the /register page to "overwrite" or create the account with a real password hash.
  
  const user = await prisma.user.upsert({
    where: { email },
    update: { role: "admin" },
    create: {
      email,
      name,
      role: "admin",
    }
  });

  console.log(`User ${user.email} is now an admin in the database.`);
  console.log("Please go to http://localhost:3000/register and sign up with this exact email to set your password.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
