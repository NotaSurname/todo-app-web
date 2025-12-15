import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaMariaDb({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo_app_db",
  connectionLimit: 5
});
const prisma = new PrismaClient({ adapter });

export { prisma }