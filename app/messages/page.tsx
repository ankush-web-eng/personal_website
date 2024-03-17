"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Messages() {
    const [messages, setMessages] = useState(null);

    let newMessage = {
        name: "Ankush",
        message: "It's Working!!!!"
    }

    const deleteMessage = async (id) => {
        console.log(id);

        try {
            await axios.post("/api/users/deletedata", { id })
            getMessages()
        } catch (error) {
            console.log("Not Deleted!");
        }
    }

    const submitMessage = async () => {
        try {
            await axios.post("/api/users/postdata", newMessage)
            getMessages()
        } catch (error) {
            console.log("Unable to send Message");
        }
    }

    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
        try {
            const response = await axios.get("/api/users/getdata");
            const filteredData = response.data.data.map(doc => ({
                name: doc.name,
                message: doc.message,
                id: doc.id
            }));
            setMessages(filteredData);
        } catch (error) {
            console.log("Messages fetching Failed", error);
        }
    };


    return (
        <div className="h-screen min-w-max text-3xl flex flex-col">
            Hello Everyone
            {messages == null
                ? "Loading..."
                : messages.map((data, index) => (
                    <span className="" key={index}>
                        {data.name} : {data.message} <br />
                        <button className="bg-red-400 rounded-lg" onClick={() => deleteMessage(data.id)}>Delete</button>
                    </span>
                ))}
            <button className="rounded-lg bg-blue-300 p-2 w-36 " onClick={submitMessage} >Submit</button>
        </div>
    );
}
