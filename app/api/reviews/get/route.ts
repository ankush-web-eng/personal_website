import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const reviews = await prisma.reviews.findMany({
            orderBy: { createdAt: "desc" },
            where: {
                isVerified: false,

            },
            take: 50,
        });

        return NextResponse.json({ success: true, reviews }, { status: 200 });

    } catch (error) {
        console.error("Error in /api/reviews/fetch", error);
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
    }
}
