"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "@/components/project";
import Loading from "@/components/loading";
interface ProjectData {
  id: string;
  title: string;
  description: string;
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
    <div className="pt-4 pb-8 flex space-y-6 flex-col">
      <h1 className="text-4xl text-blue-500 w-fit font-bold ">Projects</h1>
      <div className="md:grid md:grid-cols-2 flex flex-col space-y-4 space-x-2">
        {data !== null ?
          data.map((project, index) => (
            <Project key={index} project={project} />
          )): <Loading >Loading Projects</Loading>}
      </div>
    </div>
  );
}
