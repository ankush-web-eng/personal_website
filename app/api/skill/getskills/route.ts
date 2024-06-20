import { Connect } from "@/lib/db";
import { SkillModel } from "@/models/skillModel";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    Connect()
    try {
        const data = await SkillModel.find()
        if (!data) {
            return NextResponse.json(
                { success: false, message: "Couldn't fetch Data" },
                { status: 404 }
            )
        }

        const path = req.nextUrl.searchParams.get('path') || "/freelance"
        revalidatePath(path)

        return NextResponse.json(
            { success: true, data },
            { status: 201 }
        )
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { success: false, message: "Error in API request" },
            { status: 500 }
        )
    }

}