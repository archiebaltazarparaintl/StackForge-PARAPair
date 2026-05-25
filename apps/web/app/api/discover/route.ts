import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../../packages/db/generated/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        bio: true,
        images: true,
        interests: true,
      },
      take: 20,
    });

    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}