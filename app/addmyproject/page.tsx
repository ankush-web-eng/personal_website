"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type ProjectData = {
  title: string;
  discription: string;
};

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [discription, setDiscription] = useState<string>("");
  const [send, setSend] = useState<boolean>(false);

  const projectData: ProjectData = {
    title: title,
    discription: discription,
  };

  const sendProject = async () => {
    try {
      setSend(true);
      const response = await axios
        .post("/api/projects/addProject", projectData)
        .then(() => alert("Project Added"));
      setSend(false);
      setDiscription("");
      setTitle("");
    } catch (error) {
      alert("Error in sendProject (Frontend)");
      console.log(error);
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
        <textarea
          placeholder="Discription"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <Button variant="primary" onClick={sendProject}>
          {send ? "Adding Project" : "Add Project"}
        </Button>
      </div>
    </div>
  );
}
