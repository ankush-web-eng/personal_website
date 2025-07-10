import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ message: "Missing testimonial ID" }, { status: 400 });
    }

    try {
        const review = await prisma.reviews.findFirst({
            where: { id }
        });

        if (!review) {
            return NextResponse.json({ message: "Testimonial not found" }, { status: 404 });
        }

        await prisma.reviews.update({
            where: { id },
            data: {
                isVerified: true
            }
        });

        const path = request.nextUrl.searchParams.get('path') || "/testimimonials";
        revalidatePath(path);

        return NextResponse.json({ message: "Testimonial updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating testimonial:", error);
        return NextResponse.json({ message: "Failed to update testimonial" }, { status: 500 });
    }
}
