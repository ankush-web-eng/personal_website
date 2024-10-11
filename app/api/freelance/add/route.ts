import { Connect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary'
import { FreelanceModel } from "@/models/FreelanceModels";
import { revalidatePath } from "next/cache";

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
        const link = formdata.get("link");
        const icon = formdata.get("icon") as File;
        const shopify = formdata.get("shopify") === 'true';

        let url = "";

        if (icon) {
            const arrayBuffer = await icon.arrayBuffer();
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

        const freelance = await FreelanceModel.create({
            name: name as string,
            link: link || "",
            icon: url,
            shopify: shopify || false
        });

        if (!freelance) {
            return NextResponse.json({
                success: false,
                message: "An error occurred while adding the freelance"
            }, { status: 500 });
        }

        const path = req.nextUrl.searchParams.get("path") || "/";
        revalidatePath(path);

        return NextResponse.json({
            success: true,
            message: "Freelance added successfully",
            data: freelance
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while adding the freelance"
        }, { status: 500 });
    }
}
