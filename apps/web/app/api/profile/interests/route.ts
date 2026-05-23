/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { PrismaClient } from '../../../../../../database/generated/client';

const prisma = new PrismaClient();

// SAVE interests
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userId, interests } = body;

    if (!userId || !Array.isArray(interests)) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        interests,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Server error saving interests" },
      { status: 500 }
    );
  }
}