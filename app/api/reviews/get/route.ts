import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
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

        
        const path = req.nextUrl.searchParams.get('path') || "/kaizen";
        revalidatePath(path);

        return NextResponse.json({ success: true, reviews }, { status: 200 });

    } catch (error) {
        console.error("Error in /api/reviews/fetch", error);
        return NextResponse.json({ message: "Internal Server Error", success: false }, { status: 500 });
    }
}
