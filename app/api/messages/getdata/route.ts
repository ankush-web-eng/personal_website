import { db } from "@/config/firebase"
import { NextResponse, NextRequest } from "next/server";
import { getDocs, collection } from "firebase/firestore"

export async function GET(req: NextRequest) {

    try {
        const chatsCollection = collection(db, "chats")

        const data = await getDocs(chatsCollection);
        const formattedData = data.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return NextResponse.json({ data: formattedData });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500})
    }
}