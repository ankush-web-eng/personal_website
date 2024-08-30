"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "@/components/projects/project";
import Loading from "@/components/loading";
import GetSingleProjectsSkeleton from "../skeleton/TwoProjectSkeleton";
interface ProjectData {
  id: string;
  title: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function GetAllProjects() {
  const [data, setData] = useState<ProjectData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProjects = async () => {
    try {
      const response = await axios.get("/api/projects/getProjects");
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
    }
  };

  useEffect(() => {
    getProjects();
  });

  if (loading) {
    return <GetSingleProjectsSkeleton />
  }

  return (
    <div className="py-6 flex flex-col border-b-sky-200">
      <h1 className="text-4xl text-sky-500 py-4 w-fit font-bold ">Projects</h1>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 md:space-x-6 md:space-y-4">
        {data !== null ?
          data.map((project, index) => (
            <Project key={index} project={project} />
          )) : <Loading >Loading Projects</Loading>}
      </div>
    </div>
  );
}
