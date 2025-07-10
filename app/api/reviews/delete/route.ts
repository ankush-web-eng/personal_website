import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
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

        await prisma.reviews.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Testimonial deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting testimonial:", error);
        return NextResponse.json({ message: "Failed to delete testimonial" }, { status: 500 });
    }
}
