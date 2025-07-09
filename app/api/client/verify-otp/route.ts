import { prisma } from "@/lib/prisma";
import { sendVerificationEmail } from "@/lib/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, otp } = reqBody;

        const client = await prisma.clients.findFirst({
            where: {
                email
            }
        });

        if (!client) {
            return NextResponse.json({ message: 'Client not found', success: false }, { status: 404 });
        }

        const isSame = client.verifyCode === otp;

        if (!isSame) {
            return NextResponse.json({ message: 'Invalid verification code', success: false }, { status: 400 });
        }

        await prisma.clients.update({
            where: {
                email
            },
            data: {
                isVerified: true,
                verifyCode: ''
            }
        });

        return NextResponse.json({ success: true, message: "Verification code verified successfully" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}