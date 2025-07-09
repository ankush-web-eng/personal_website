import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const { searchParams } = new URL(req.url);
        const secretCode = searchParams.get('secret_code');
        if (!secretCode) {
            return NextResponse.json({ success: false, message: 'Secret code is required' }, { status: 400 });
        }

        if (secretCode !== process.env.SECRET_CODE) {
            return NextResponse.json({ success: false, message: 'Invalid secret code' }, { status: 403 });
        }

        const users = await prisma.clients.findMany({
            where: {
                isVerified: true,
            },
            select: {
                email: true
            }
        });

        return NextResponse.json({ totalEmails: users.length, data: users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'An error occurred while fetching clients.' }, { status: 500 });
    }
}