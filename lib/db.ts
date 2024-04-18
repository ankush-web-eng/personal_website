// import mongoose from 'mongoose';

// type ConnectionProps = {
//     isConnected?: number;
// }

// const connection : ConnectionProps = {}

// export async function Connect () : Promise <void> {
//     if (connection.isConnected) {
//         console.log('Using existing connection');
//         return;
//     }

//     try {
//         const db  = await mongoose.connect(process.env.MONGODB_URI || "", {})
//         connection.isConnected = db.connections[0].readyState;

//         console.log('MongoDB database is connected Successfully');
//     } catch (error) {
//         console.log("MongoDB Database Connection Error: ",error);
//     }
// }