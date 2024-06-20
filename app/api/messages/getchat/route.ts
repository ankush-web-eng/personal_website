import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
const prisma = new PrismaClient()

export async function GET(req:NextRequest){
    try {
        const data = await prisma.chat.findMany()

        // const path = req.nextUrl.searchParams.get('path') || "/"
        // revalidatePath(path)

        return NextResponse.json(data)
        // console.log(data);
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}