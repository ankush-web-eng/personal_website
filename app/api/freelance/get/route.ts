import { Connect } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { FreelanceModel } from "@/models/FreelanceModels";

export async function GET(req: NextRequest) {

    Connect();

    try {
        const data = await FreelanceModel.find();

        if (!data) {
            return NextResponse.json({
                success: false,
                message: "An error occurred while fetching the freelance"
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            data
        }, {status : 200});

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success: false,
            message: "An error occurred while adding the freelance"
        }, { status: 500 });
    }
}