import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

interface params {
    id: string;
}

export async function GET(req: NextRequest, context: params) {
    try {

        const id = context.id
        
        const data = await prisma.ghost.findUnique({
            where: {
                id: id
            }
        })

        if (!data) {
            return NextResponse.json(
                { success: false, message: 'Error in getting Ghosts' },
                { status: 400 }
            );
        }

        // Fix the caching for the path
        const path = req.nextUrl.searchParams.get('path') || `/kaizen/${id}`        
        revalidatePath(path)

        return NextResponse.json({data:data }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 })
    }
}