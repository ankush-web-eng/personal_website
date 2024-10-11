import mongoose from 'mongoose';

type ConnectionProps = {
    isConnected?: number;
}

const connection : ConnectionProps = {}

export async function Connect () : Promise <void> {
    if (connection.isConnected) {
        return;
    }

    try {
        const db  = await mongoose.connect(process.env.MONGO_URI || "", {})
        connection.isConnected = db.connections[0].readyState;

    } catch (error) {
        console.error("Error in Connecting to MongoDB:", error);
    }
}