"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "@/components/projects/project";
import Loading from "@/components/loading";
import Link from "next/link";
interface ProjectData {
  id: string;
  title: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function GetSingleProjects() {
  const [data, setData] = useState<ProjectData[] | null>(null);

  const getProjects = async () => {
    try {
      const response = await axios.get("/api/projects/getProjects");
      setData(response.data.data.slice(0,2));
    } catch (error) {
    }
  };

  useEffect(() => {
    getProjects();
  });

  return (
    <div className="pt-4 pb-8 flex space-y-6 flex-col border-b-sky-200">
      <h1 className="text-4xl text-sky-500 w-fit font-bold ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 md:space-x-2">
        {data !== null ?
          data.map((project, index) => (
            <Project key={index} project={project} />
          )): <Loading >Loading Projects</Loading>}
      </div>
      <Link className="text-sky-500" href="/freelance">View More on Freelance Page</Link>
    </div>
  );
}
