import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const applications = await prisma.application.findMany();

        if (!applications) {
            return NextResponse.json(
                { success: false, message: 'Error in getting Ghosts' },
                { status: 400 }
            );
        }

        // const path = req.nextUrl.searchParams.get('path') || "/freelance";
        // revalidatePath(path);

        return NextResponse.json({ data: applications }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while fetching applications",
        });
    }
}