import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib/prisma";

type Params = {
    params : {
        id:string
    }
}

export async function GET(req: NextRequest, context: Params) {
    try {

        const newId = context.params.id
        
        const data = await prisma.ghost.findFirst({
            where: {
                id: newId
            }
        })

        if (!data) {
            return NextResponse.json(
                { success: false, message: 'Error in getting Ghosts' },
                { status: 400 }
            );
        }

        // Fix the caching for the path
        const path = req.nextUrl.searchParams.get('path') || `/kaizen/${newId}`        
        revalidatePath(path)

        return NextResponse.json({data}, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 })
    }
}