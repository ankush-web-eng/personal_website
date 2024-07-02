import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore"
import { NextRequest, NextResponse } from "next/server";
// import { json } from "next/server"; 

export async function POST(req: NextRequest) {
    try {
        const chatRefrence = collection(db, "chats")
        const data = await req.json()
        const {name, message} = data

        const newMessage = {
            name:name,
            message:message
        }

        const issaved = await addDoc(chatRefrence, newMessage)
        if (issaved) {
            return NextResponse.json({
                success: false,
                message: "Message Not Saved"
            }, {status: 500})
        }

        return NextResponse.json({
            success: true,
            message: "Message Saved Successfully"
        }, {status: 201})

    } catch (error) {
        return NextResponse.json({message: "Something went wrong!"}, {status: 500})
    }
}
