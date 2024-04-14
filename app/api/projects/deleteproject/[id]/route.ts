import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient

type Params = {
    params : {
        id:string
    }
}

export async function GET(req : NextRequest, context: Params){
    try {
        const newId = context.params.id
        const project = await prisma.projects.delete({
            where: {
                id: newId
            }
        })

        console.log(project);

        const path = req.nextUrl.searchParams.get('path') || "/freelance"
        revalidatePath(path)

        return NextResponse.json({message: "Project deleted successfully"}, {status: 200})

    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}