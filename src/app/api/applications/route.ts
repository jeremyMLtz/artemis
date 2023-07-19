import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
  const prisma = new PrismaClient();
  const applications = await prisma.applications.findMany();
  console.log(applications);
  return new Response(JSON.stringify(applications));
}
