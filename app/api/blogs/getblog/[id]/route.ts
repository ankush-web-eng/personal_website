import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient()

type Params = {
    params : {
        id:string
    }
}
// 
export async function GET(req:NextRequest, context : Params){
    try {
        const newId = context.params.id
        // console.log(newId);
        
        const data = await prisma.blog.findFirst({
            where: {
                id: newId
            }
        })
        // console.log(data);

        // const path = req.nextUrl.searchParams.get("path") || "/"
        // revalidatePath(path)

        return NextResponse.json({data}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: error}, {status: 500})
    }
}
