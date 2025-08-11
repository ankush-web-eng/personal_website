import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const { id } = await request.json();

    if (!id) {
        return NextResponse.json({ message: "Missing feedback ID" }, { status: 400 });
    }

    try {
        const feedback = await prisma.feedback.findFirst({
            where: { id }
        });

        if (!feedback) {
            return NextResponse.json({ message: "Feedback not found" }, { status: 404 });
        }

        await prisma.feedback.delete({
            where: { id },
        });


        const path = request.nextUrl.searchParams.get('path') || "/feedbacks";
        revalidatePath(path);

        return NextResponse.json({ message: "Feedback deleted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error deleting feedback:", error);
        return NextResponse.json({ message: "Failed to delete feedback" }, { status: 500 });
    }
}
