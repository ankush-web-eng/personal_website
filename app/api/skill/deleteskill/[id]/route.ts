import { Connect } from "@/lib/db";
import { SkillModel } from "@/models/skillModel";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type Params = {
    params: {
        id: string
    }
}

export async function GET(req: NextRequest, context: Params) {
    Connect()
    const id = context.params.id

    try {

        const isDeleted = await SkillModel.findByIdAndDelete(id)

        if (!isDeleted) {
            return NextResponse.json(
                { success: false, message: "Error in deleting Skill" },
                { status: 403 }
            )
        }

        const path = req.nextUrl.searchParams.get('path') || "/freelance"
        revalidatePath(path)

        return NextResponse.json(
            { sucess: true, message: "Deleted Successfully" },
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