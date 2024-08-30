"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Project from "@/components/projects/project";
import Loading from "@/components/loading";
import Link from "next/link";
import GetSingleProjectsSkeleton from "@/components/skeleton/TwoProjectSkeleton";

interface ProjectData {
  id: string;
  title: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function GetSingleProjects() {
  const [data, setData] = useState<ProjectData[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getProjects = useCallback(async () => {
    try {
      const response = await axios.get("/api/projects/getProjects");
      const shuffledData = shuffleArray(response.data.data) as ProjectData[];
      setData(shuffledData.slice(0, 2));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  }, [])

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  if (isLoading) {
    <GetSingleProjectsSkeleton />;
  }

  return (
    <div className="pt-4 pb-8 flex space-y-6 flex-col border-b-sky-200">
      <h1 className="text-4xl text-sky-500 w-fit font-bold ">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 md:space-x-2">
        {data !== null && data.length > 0 ? (
          data.map((project, index) => (
            <Project key={index} project={project} />
          ))
        ) : (
          <Loading>Loading Projects</Loading>
        )}
      </div>
      <Link className="text-sky-500" href="/freelance">
        View More on Freelance Page
      </Link>
    </div>
  );
}
