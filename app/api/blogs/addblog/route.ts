import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json()
        const blogdata = {
            title: reqBody.title,
            subtitle: reqBody.subtitle,
            first: reqBody.first,
            second: reqBody.second,
            third: reqBody.third,
            fourth: reqBody.fourth,
        }

        // const blog = await prisma.blog.create({
        //     data: blogdata
        //   }).catch((error) => {
        //     console.error(error);
        //     return NextResponse.json({ error: "Error in adding blog" }, { status: 500 });
        //   });

        // console.log(blog);

        // const path = req.nextUrl.searchParams.get('path') || "/addmyblog"
        // revalidatePath(path)

        return NextResponse.json({ message: "Blog Added" }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error in adding blog" }, { status: 500 })
    }
}