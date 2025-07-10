import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
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

        return NextResponse.json({ message: "Testimonial updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating testimonial:", error);
        return NextResponse.json({ message: "Failed to update testimonial" }, { status: 500 });
    }
}
