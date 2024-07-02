"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type ProjectData = {
  title: string;
  para1: string;
  para2: string;
  para3: string;
};

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [para1, setPara1] = useState<string>("");
  const [para2, setPara2] = useState<string>("");
  const [para3, setPara3] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  const projectData: ProjectData = {
    title: title,
    para1: para1,
    para2: para2,
    para3: para3,
  };

  const sendProject = async () => {
    try {
      setSend(true);
      const response = await axios
        .post("/api/projects/addProject", projectData)
        .then(() => alert("Project Added"));
      setSend(false);
      setPara1("");
      setPara2("");
      setPara3("");
      setTitle("");
    } catch (error) {
      alert("Error in sendProject (Frontend)");
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para1}
          onChange={(e) => setPara1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para2}
          onChange={(e) => setPara2(e.target.value)}
        />
        <input
          type="text"
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={para3}
          onChange={(e) => setPara3(e.target.value)}
        />
        <Button variant="primary" onClick={sendProject}>
          {send ? "Adding Project" : "Add Project"}
        </Button>
      </div>
    </div>
  );
}
