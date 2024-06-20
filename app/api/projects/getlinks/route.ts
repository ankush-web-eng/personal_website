import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(req:NextRequest) {
    try {
        const data = await prisma.link.findMany()

        if (!data) {
            return NextResponse.json({ message: 'No links found' }, { status: 404 })
        }

        const path = req.nextUrl.searchParams.get('path') || "/"
        revalidatePath(path)

        return NextResponse.json({data: data}, {status: 201})

    }  catch (error) {
        console.log(error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
}