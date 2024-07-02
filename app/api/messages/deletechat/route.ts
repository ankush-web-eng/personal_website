import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
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

        const path = req.nextUrl.searchParams.get('path') || "/"
        revalidatePath(path)

        return NextResponse.json({
            status: 200,
            body: { message: "Chat Deleted Successfully!" }
        })
    } catch (error) {
        return NextResponse.json({message:"Something went wrong!"},{status:500})
    }
}