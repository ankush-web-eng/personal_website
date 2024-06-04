import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {

        const reqBoy = await req.json()
        const { id } = reqBoy.id

        const data = await prisma.ghost.delete({
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
        const path = req.nextUrl.searchParams.get('path') || "/kaizen"
        revalidatePath(path)

        return NextResponse.json({ success: true, message: "Deleted Successfully!" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 })
    }
}