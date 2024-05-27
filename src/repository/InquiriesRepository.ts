import { PrismaClient, Prisma } from '@prisma/client'

async function new_inquiries(
  fullname: string,
  email: string,
  phone: string,
  message: string
){
  const prisma = new PrismaClient()

  const result = await prisma.inquiries.create({
    data: {
      fullname,
      email,
      phone,
      message
    }
  });

  return result;
}

export { new_inquiries }