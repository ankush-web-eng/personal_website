"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type BlogData = {
  title: string;
  subtitle: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
};
export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubTitle] = useState<string>("");
  const [para1, setPara1] = useState<string>("");
  const [para2, setPara2] = useState<string>("");
  const [para3, setPara3] = useState<string>("");
  const [para4, setPara4] = useState<string>("");

  const [send, setSend] = useState<boolean>(false);

  const blogData: BlogData = {
    title: title,
    subtitle: subtitle,
    first: para1,
    second: para2,
    third: para3,
    fourth: para4,
  };

  const sendBlog = async () => {
    try {
      setSend(true);
    //   const response = await axios
    //     .post("/api/blogs/addblog", blogData)
    //     .then(() => alert("Blog Added"));
      setSend(false);
      setTitle("");
      setSubTitle("");
      setPara1("");
      setPara2("");
      setPara3("");
      setPara4("");
    } catch (error) {
      console.log(error);
      alert("Errror in sending Blog");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Add My Project</h1>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={subtitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        <textarea
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para1}
          onChange={(e) => setPara1(e.target.value)}
        />
        <textarea
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para2}
          onChange={(e) => setPara2(e.target.value)}
        />
        <textarea
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para3}
          onChange={(e) => setPara3(e.target.value)}
        />
        <textarea
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para4}
          onChange={(e) => setPara4(e.target.value)}
        />
        <Button variant="primary" onClick={sendBlog}>
          {send ? "Adding Blog" : "Add Blog"}
        </Button>
      </div>
    </div>
  );
}
