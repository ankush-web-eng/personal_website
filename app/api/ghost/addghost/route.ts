import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from "next/cache";
import { Type } from "@prisma/client";

const prisma = new PrismaClient()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
    try {
        const formdata = await req.formData()
        const title = formdata.get("title")
        const subtitle = formdata.get("subtitle")
        const image = formdata.get("image") as File
        const content = formdata.get("content")
        const type = formdata.get("type")

        // Convert image into a Cloudinary readable format
        const arrayBuffer = await image.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)

        // Upload image to cloudinary and get URL
        const uploadResponse = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                { resource_type: 'auto' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        });

        if (!uploadResponse) {
            return NextResponse.json(
                { success: false, message: 'Error in Uploading Image' },
                { status: 400 }
            );
        }

        const url = (uploadResponse as { secure_url: string }).secure_url;

        // Convert content to an array and type to the correct type
        const contentArray = [content as string];
        const typeEnum = type as Type;

        // Create the ghost in the database
        const res = await prisma.ghost.create({
            data: {
                title: title as string,
                subtitle: subtitle as string,
                image: url,
                type: typeEnum,
                content: contentArray,
            }
        })
        if (!res) {
            return NextResponse.json(
                { success: false, message: 'Error in Uploading Image' },
                { status: 400 }
            );
        }

        // Fix the caching for the path
        const path = req.nextUrl.searchParams.get('path') || "/addmyghost"
        revalidatePath(path)

        console.log(res);

        return NextResponse.json({ success: true, message: "Success" }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ success: false, message: "Error in backend" }, { status: 500 })
    }
}