import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, image, rating, message } = body;

    if (!email || typeof email !== "string" || !message) {
      return NextResponse.json({ message: "Missing required fields", success: false }, { status: 400 });
    }

    await prisma.reviews.upsert({
      where: { email },
      update: { name, image, rating, message },
      create: { name, email, image, rating, message },
    });

    return NextResponse.json({ success: true, message: "Review submitted successfully" }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/reviews/create", error);
    return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
  }
}
