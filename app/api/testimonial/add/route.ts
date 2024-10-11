import { Connect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { revalidatePath } from "next/cache";
import { TestimonoialModel } from "@/models/testimonialModel";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
    Connect();

    try {
        const formdata = await req.formData();
        const name = formdata.get("name");
        const content = formdata.get("content");
        const image = formdata.get("image") as File;
        const company = formdata.get("company");
        const project = formdata.get("project");

        let url = "";

        if (image) {
            const arrayBuffer = await image.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);

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

            url = (uploadResponse as { secure_url: string }).secure_url;
        }

        const testimonial = await TestimonoialModel.create({
            name: name as string,
            content,
            image: url,
            company: company || "",
            project: project || ""
        });

        if (!testimonial) {
            return NextResponse.json({
                success: false,
                message: "An error occurred while adding the testimonial"
            }, { status: 500 });
        }

        const path = req.nextUrl.searchParams.get("path") || "/";
        revalidatePath(path);

        return NextResponse.json({
            success: true,
            message: "Testimonial added successfully",
            data: testimonial
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while adding the testimonial"
        }, { status: 500 });
    }
}
