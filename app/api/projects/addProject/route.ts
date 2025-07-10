import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const { title, para1, para2, para3 } = reqBody

        const newProject = {
            title: title,
            para1: para1,
            para2: para2,
            para3: para3
        }

        await prisma.projects.create({
            data : newProject
        })

        const path = req.nextUrl.searchParams.get("path") || "/"
        revalidatePath(path)

        return NextResponse.json({message: "Project Added"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}
