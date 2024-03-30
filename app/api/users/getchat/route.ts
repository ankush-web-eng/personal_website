import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(){
    try {
        const data = await prisma.chat.findMany()
        return NextResponse.json(data)
        // console.log(data);
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status:500})
    }
}