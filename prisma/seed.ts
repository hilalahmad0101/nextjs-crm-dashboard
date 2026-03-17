import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import 'dotenv/config'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new pg.Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log("Seeding permissions...")
  const permissions = [
    { name: 'View Dashboards', slug: 'view_dashboards', module: 'Analytics' },
    { name: 'Export Reports', slug: 'export_reports', module: 'Analytics' },
    { name: 'Create Leads', slug: 'create_leads', module: 'Sales' },
    { name: 'Delete Leads', slug: 'delete_leads', module: 'Sales' },
    { name: 'Manage Users', slug: 'manage_users', module: 'Users' },
    { name: 'Settings Access', slug: 'settings_access', module: 'System' },
  ]

  for (const p of permissions) {
    await prisma.permission.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    })
  }

  console.log("Seeding basic roles...")
  const basicRoles = [
    { name: 'Admin', description: 'Full access to all system modules and settings' },
    { name: 'Sales Representative', description: 'Manage leads, pipeline and follow-up tasks' },
    { name: 'Customer Success', description: 'Access to customer directory and support tickets' },
  ]

  for (const role of basicRoles) {
    await prisma.systemRole.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    })
  }

  console.log("Starting bulk role generation (1,000,000 roles)...")
  const BATCH_SIZE = 5000
  const TOTAL_ROLES = 1000000
  
  // We'll skip roles that already exist to avoid unique constraint errors
  // But for the sake of speed in a test environment, we assume we want to fill up to 1M
  
  for (let i = 0; i < TOTAL_ROLES; i += BATCH_SIZE) {
    const batch = []
    for (let j = 1; j <= BATCH_SIZE; j++) {
      const roleNum = i + j
      if (roleNum > TOTAL_ROLES) break
      batch.push({
        name: `Test Role ${roleNum}`,
        description: `Auto-generated test role number ${roleNum}`,
      })
    }
    
    // Check if first in batch exists to avoid re-running slowly if partially seeded
    const exists = await prisma.systemRole.findUnique({ where: { name: batch[0].name } })
    if (exists) {
      console.log(`Batch starting with ${batch[0].name} already exists. Skipping...`)
      continue
    }

    await prisma.systemRole.createMany({
      data: batch,
      skipDuplicates: true,
    })
    
    console.log(`Seeded ${i + batch.length} / ${TOTAL_ROLES} roles...`)
  }

  console.log("Seeding complete.")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
