import { db } from "@/config/firebase";
import { NextResponse, NextRequest } from "next/server";
import { deleteDoc, doc } from "firebase/firestore";

export async function POST(req: NextRequest){
    try {
        const { id } = await req.json(); // Extract id from request body

        const chatDoc = doc(db, 'chats', id);
        await deleteDoc(chatDoc);
        
        return NextResponse.json({
            success: true,
            message: "Message Deleted Successfully"
        }, {status: 201});
    } catch (error) {
        return NextResponse.json({message:"Something went wrong!"},{status:500})
    }
}
