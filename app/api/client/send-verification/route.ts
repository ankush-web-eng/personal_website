import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ message: "Invalid email", success: false }, { status: 400 });
    }

    const verifyCode = Math.floor(1000 + Math.random() * 9000).toString();

    const client = await prisma.clients.upsert({
      where: { email },
      update: { verifyCode },
      create: { email, verifyCode },
    });

    const sent = await sendVerificationEmail(email, verifyCode);

    if (!sent) {
      return NextResponse.json({ message: 'Error in sending verification email', success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Verification code sent successfully", verifyCode }, { status: 200 });

  } catch (error) {
    console.error("Error in /api/client/send-verification", error);
    return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
  }
}
