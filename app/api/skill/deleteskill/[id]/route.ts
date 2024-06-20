import { Connect } from "@/lib/db";
import { SkillModel } from "@/models/skillModel";
import mongoose from "mongoose";
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
        // console.log(id);
        // console.log(new mongoose.Types.ObjectId(id));
        
        const isDeleted = await SkillModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) })
        console.log(isDeleted);
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