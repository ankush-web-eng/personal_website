import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { title, discription } = reqBody

        const newProject = {
            title: title,
            description: discription
        }

        await prisma.project.create({
            data : newProject
        })

        const path = req.nextUrl.searchParams.get("path") || "/"
        revalidatePath(path)

        return NextResponse.json({message: "Project Added"}, {status: 201})
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: error}, {status: 500})
    }
}
