import { Prisma, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const primsa = new PrismaClient()

export async function POST(req:NextRequest) {
    try {
        const reqBody = await req.json()
        const {id} = reqBody 

        const user = await primsa.link.delete({
            where:{
                id: id
            }
        })

        if (!user) {
            return NextResponse.json({ status: 404, message: "Link not found" })
        
        }

        const path = req.nextUrl.searchParams.get("path") || "/"
        revalidatePath(path)

        return NextResponse.json({ status: 201, message: "Link deleted successfully" })
    } catch (error) {
        return NextResponse.json({ status: 500, message: "Unable to create link" })
    }
    
}