import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextResponse) {
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
            console.log("Message Saved Successfully");
            console.log(newMessage);
        }

        return NextResponse.json({
            success: true,
            message: "Message Saved Successfully"
        }, {status: 201})

    } catch (error) {
        console.log("Error Posting the Message: ", error)
    }
}