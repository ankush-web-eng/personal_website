import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { id } = reqBody;

        const isDeleted = await prisma.chat.delete({
            where: {
                id: id
            }
        })

        return NextResponse.json({
            status: 200,
            body: { message: "Chat Deleted Successfully!" }
        })
    } catch (error) {
        console.log("Error Getting the Message: ", error);
    }
}