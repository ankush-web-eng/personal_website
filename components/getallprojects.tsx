"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "@/components/project";
import Loading from "@/components/loading";
interface ProjectData {
  id: string;
  title: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function GetAllProjects() {
  const [data, setData] = useState<ProjectData[] | null>(null);

  const getProjects = async () => {
    try {
      const response = await axios.get("/api/projects/getProjects");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  });

  return (
    <div className="py-6 flex flex-col border-b-sky-200">
      <h1 className="text-4xl text-blue-500 py-4 w-fit font-bold ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 md:space-x-8 md:space-y-4">
        {data !== null ?
          data.map((project, index) => (
            <Project key={index} project={project} />
          )): <Loading >Loading Projects</Loading>}
      </div>
    </div>
  );
}
