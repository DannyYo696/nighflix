import { PrismaClient } from '@prisma/client'

export const db = new PrismaClient({
  adapter: process.env.DATABASE_URL,
  log: ['query'],
})
