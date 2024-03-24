"use client"
import { Navbar } from "@/components/navbar";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { auth } from "@/config/firebase";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { Header } from "@/components/header";

export default function Messages() {
    const [messages, setMessages] = useState(null);
    const [chat, setChat] = useState("")
    const [isTyped, setIsTyped] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    const user = auth?.currentUser?.displayName

    let newMessage = {
        name: user,
        message: chat
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
            setChat("")
            getMessages()

        } catch (error) {
            console.log("Unable to send Message");
        }
    }

    useEffect(() => {
        if (chat.length > 0 && !isTyped) {
            setIsTyped(true)
        } else if (chat.length === 0) {
            setIsTyped(false)
        }
    }, [chat]);

    useEffect(() => {
        if (user) {
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    }, [user])

    useEffect(() => {
        getMessages()
    },[])

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
        <div className="">
            <div className="hidden md:flex">
                <Navbar />
                <div className="w-1/2 h-screen pt-8 space-y-8 pl-6">
                    <Header />
                    <h1 className="text-4xl font-bold">Leave a <span className="text-teal-500">Comment</span></h1>
                    <div className="flex flex-col">
                        {messages == null
                            ? "Loading..."
                            : messages.map((data, index) => (
                                <span className="flex space-x-2" key={index}>
                                    <p className="text-gray-700">{data.name}</p> : <p>{data.message}</p>
                                    <button className="" onClick={() => deleteMessage(data.id)}><RiDeleteBin6Fill /></button>
                                </span>
                            ))}
                        {isAuth && <div className="fixed shrink-0 bottom-0 rounded-full items-center flex space-x-3 pb-4  z-50 ">
                            <input type="text"
                                placeholder="Comment here..."
                                value={chat}
                                onChange={(e) => setChat(e.target.value)}
                                className="rounded-full px-2 py-1 border-2 border-slate-500 dark:border-gray-400"
                            />
                            {isTyped && <button onClick={submitMessage}><IoIosSend size={24} /></button>}
                        </div>}
                    </div>
                </div>
            </div>
            <div className="flex md:hidden">
            <div className="w-screen h-screen pt-3 space-y-5 pl-2">
                <Header />
                    <h1 className="text-4xl font-bold">Leave a <span className="text-teal-500">Comment</span></h1>
                    <div className="flex flex-col">
                        {messages == null
                            ? "Loading..."
                            : messages.map((data, index) => (
                                <span className="flex space-x-2" key={index}>
                                    <p className="text-gray-700 dark:text-gray-200 inline-flex">{data.name}</p> : <p>{data.message}</p>
                                    <button className="" onClick={() => deleteMessage(data.id)}><RiDeleteBin6Fill /></button>
                                </span>
                            ))}
                        {isAuth && <div className="fixed shrink-0 bottom-0 rounded-full items-center flex space-x-3 pb-16 z-50 ">
                            <input type="text"
                                placeholder="Comment here..."
                                value={chat}
                                onChange={(e) => setChat(e.target.value)}
                                className="rounded-full px-2 py-1 border-2 border-slate-500 dark:border-gray-400"
                            />
                            {isTyped && <button onClick={submitMessage}><IoIosSend size={24} /></button>}
                        </div>}
                    </div>
                </div>
                <div className="pb-5"></div>
                <Navbar />
            </div>
        </div>
    );
}
// {messages == null
//     ? "Loading..."
//     : messages.map((data, index) => (
//         <span className="" key={index}>
//             {data.name} : {data.message} <br />
//             <button className="bg-red-400 rounded-lg" onClick={() => deleteMessage(data.id)}>Delete</button>
//         </span>
//     ))}