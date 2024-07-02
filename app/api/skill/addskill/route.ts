import { Connect } from '@/lib/db';
import { SkillModel } from '@/models/skillModel';
import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {

    Connect()

    try {
        const formdata = await req.formData()
        const name = formdata.get('name')
        const type = formdata.get('type')
        const favicon = formdata.get('favicon') as File

        if (!name || !favicon || !type) {
            return NextResponse.json(
                { success: false, message: 'Data required!!' },
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

        if (!url) {
            return NextResponse.json(
                { success: false, message: "Error in Saving Image" },
                { status: 500 }
            )
        }

        const model = new SkillModel({
            name,
            type,
            icon: url
        })

        const isSaved = await model.save()

        const path = req.nextUrl.searchParams.get('path') || "/addmyskill"
        revalidatePath(path)

        if (!isSaved) {
            return NextResponse.json(
                { success: false, message: 'Error in saving data' },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true, message: 'Success in uploading Skill' }, { status: 201 })

    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}