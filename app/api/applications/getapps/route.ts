import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        const applications = await prisma.application.findMany();
        if (!applications) {
            return NextResponse.json({
                status: "error",
                message: "No applications found",
            })
        }

        const path = req.nextUrl.searchParams.get('path') || "/freelance"
        revalidatePath(path)

        return NextResponse.json({
            status: "success",
            data: applications,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while fetching applications",
        });
    }
}