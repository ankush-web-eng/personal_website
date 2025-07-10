import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const blogdata = {
            title: reqBody.title,
            subtitle: reqBody.subtitle,
            para1: reqBody.para1,
            para2: reqBody.para2,
            para3: reqBody.para3,
            para4: reqBody.para4,
            para5: reqBody.para5,
        }

        const blog = await prisma.blog.create({
            data: blogdata
        })
        // .catch((error) => {
        //     console.error(error);
        //     return NextResponse.json({ error: "Error in adding blog" }, { status: 500 });
        // });


        const path = req.nextUrl.searchParams.get('path') || "/addmyblog"
        revalidatePath(path)

        return NextResponse.json({ message: "Blog Added" }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ error: "Error in adding blog" }, { status: 500 })
    }
}