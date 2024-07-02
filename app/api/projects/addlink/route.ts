import { PrismaClient } from "@prisma/client";
import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
    try {
        const formdata = await req.formData()
        const name = formdata.get('name')
        const link = formdata.get('link')
        const favicon = formdata.get('favicon') as File

        if (!name || !favicon || !link) {
            return NextResponse.json(
                { success: false, message: 'Email and file are required' },
                { status: 400 }
            );
        }

        // Convert image into a Cloudinary readable format
        const arrayBuffer = await favicon.arrayBuffer()
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

        const user = await prisma.link.create({
            data: {
                title: name as string,
                url: link as string,
                image: url
            }

        })

        if (!user) {
            return NextResponse.json({ success: true, message: 'Link added successfully' })
        }

        const path = req.nextUrl.searchParams.get('path') || "/addmylink"
        revalidatePath(path)

        return NextResponse.json({ success: true, message: 'Success in uploading link' }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}