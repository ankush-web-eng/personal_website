import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        if (!reqBody) {
            return NextResponse.json({
                success: false,
                message: "No data provided",
            });
        }

        const { title, url, description, github } = reqBody;
        if (!title || !url || !description || !github) {
            return NextResponse.json({
                success: false,
                message: "Please provide all required fields",
            });
        }

        const isSaved = await prisma.application.create({
            data: {
                title,
                image: url,
                description,
                github,
            }
        });

        if (!isSaved) {
            return NextResponse.json({
                success: false,
                message: "An error occurred while saving the application",
            });
        }

        const path = req.nextUrl.searchParams.get("path") || "/";
        revalidatePath(path);

        return NextResponse.json({
            success: true,
            message: "Application saved successfully",
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "An error occurred while saving the application",
        })
    }
}