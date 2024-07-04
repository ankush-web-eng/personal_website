"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Auth } from "@/components/auth";

import { RiDeleteBin6Fill } from "react-icons/ri";
import { TbLoader2 } from "react-icons/tb";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  name: string;
  message: string;
  id: string;
}

interface NewMessage {
  name: string | null;
  message: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [chat, setChat] = useState<string>("");
  const [isTyped, setIsTyped] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [send, setSend] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);

  const [user, setUser] = useState<string>("");
  const { toast } = useToast()

  const newMessage: NewMessage = {
    name: user,
    message: chat,
  };

  const deleteMessage = async (id: string): Promise<void> => {
    try {
      setDel(true);
      await axios.post("/api/messages/deletechat", { id });
      toast({
        title: "Success",
        description: "Message Deleted",
        variant: "default"
      })
      setDel(false);
      // getMessages();
      getChats();
    } catch (error) {
      toast({
        title: "Failed",
        description: "failed to delete message",
        variant: "destructive"
      });
    }
  };

  const submitMessage = async (): Promise<void> => {
    try {
      setSend(true);
      await axios.post("/api/messages/savechat", newMessage);
      toast({
        title: "Success",
        description: "Message Sent",
        variant: "default"
      })
      setChat("");
      setSend(false);
      // getMessages();
      getChats();
    } catch (error) {
      toast({
        title: "Failed",
        description: "Failed to send message",
        variant: "destructive"
      });
    }
  };

  useEffect(() => {
    if (chat.length > 0 && !isTyped) {
      setIsTyped(true);
    } else if (chat.length === 0) {
      setIsTyped(false);
    }
  }, [chat, isTyped]);

  useEffect(() => {
    if (user == "null") {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [user]);

  const getUserName = async () => {
    try {
      const data = await axios.get("/api/users/getuser");
      if (data.data.data === null) {
        setUser("null");
      } else {
        setUser(data.data.data.name);
      }
    } catch (error) {}
  };

  const getChats = async () => {
    try {
      const data = await axios.get("/api/messages/getchat");
      setMessages(
        data.data.map((item: any) => ({
          name: item.name,
          message: item.messages,
          id: item.id,
        }))
      );
    } catch (error) {
    }
  };

  useEffect(() => {
    // getMessages();
    getUserName();
    getChats();
  }, []);

  const getMessages = async (): Promise<void> => {
    try {
      const response = await axios.get("/api/messages/getdata");
      const filteredData: Message[] = response.data.data.map((doc: any) => ({
        name: doc.name,
        message: doc.message,
        id: doc.id,
      }));
      setMessages(filteredData);
    } catch (error) {
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <TbLoader2 className="animate-spin w-1/5 h-1/5 text-sky-500" />
      </div>
    );
  return (
    <div className="w-full h-screen pt-8 space-y-8 pl-6">
      <h1 className="text-4xl font-bold">
        Leave a <span className="text-teal-500">Comment</span>
      </h1>
      <Auth />
      <div className="flex flex-col">
        {messages === null ? (
          "Loading..."
        ) : messages.length === 0 ? (
          "No messages"
        ) : (
          messages.map(({ id, name, message }, index) => (
            <div className="flex items-center" key={index}>
              <p className="text-slate-600 dark:text-slate-300 min-w-[100px] max-w-[100px] truncate mr-2">
                {name}
              </p>
              :
              <p className="text-slate-500 dark:text-slate-400 flex-1 truncate">
                {message}
              </p>
              {user === name && (
                <button onClick={() => deleteMessage(id)} className="ml-2">
                  <RiDeleteBin6Fill />
                </button>
              )}
            </div>
          ))
        )}
        {isAuth && (
          <div className="fixed shrink-0 bottom-0 rounded-full items-center flex space-x-3 pb-4 z-50 ">
            <input
              type="text"
              placeholder="Comment here..."
              value={chat}
              onChange={(e) => setChat(e.target.value)}
              className="rounded-full px-2 py-1 border-2 w-full border-slate-500 dark:border-gray-400"
            />
            {isTyped && (
              <button
                onClick={submitMessage}
                className="bg-blue-500 px-2 py-1 rounded-full "
              >
                {send ? "Sending..." : "Send"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
