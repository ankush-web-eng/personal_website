import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
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
        // console.log(sentData);
        return NextResponse.json({ message: 'Chat saved successfully!' }, { status: 201 })
    } catch (error: any) {
        console.log("Error Posting the Message: ", error)
    }
}