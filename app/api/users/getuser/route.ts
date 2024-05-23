import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const session = await getServerSession()

        const name = session?.user?.name
        const email = session?.user?.email
        const image = session?.user?.image
        if (name) {
            return NextResponse.json({
                data: { name, email, image }
            })
        }
        else {
            return NextResponse.json({
                data: null
            })
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 })
    }
}