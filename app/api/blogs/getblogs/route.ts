import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(req:NextRequest){
    try {
        const data = await prisma.blog.findMany()
        
        const path = req.nextUrl.searchParams.get('path') || "/kaizen"
        revalidatePath(path)

        return NextResponse.json({data}, {status: 201})

    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}