import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const data = await req.json()
        const {name, message} = data

        const newMessage = {
            name:name,
            messages:message
        }
        const sentData = await prisma.chat.create({
            data: newMessage
        })

        const path = req.nextUrl.searchParams.get('path') || "/"
        revalidatePath(path)

        return NextResponse.json({ message: 'Chat saved successfully!' }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500})
    }
}