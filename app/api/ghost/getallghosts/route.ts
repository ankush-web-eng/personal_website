import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
    try {
        
        const data = await prisma.ghost.findMany()

        if (!data) {
            return NextResponse.json(
                { success: false, message: 'Error in getting Ghosts' },
                { status: 400 }
            );
        }

        // Fix the caching for the path
        // const path = req.nextUrl.searchParams.get('path') || "/kaizen"
        // revalidatePath(path)

        return NextResponse.json({data:data }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 })
    }
}