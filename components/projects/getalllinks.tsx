"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectLink from "./getlink";
import Loading from "../loading";
import ProjectLinksSkeleton from "@/components/skeleton/ProjectLinkSkeleton";

interface Params {
  id: string;
  title: string;
  url: string;
  image: string;
}

export default function GetAllLinks() {
  const [data, setData] = useState<Params[] | null>(null);
  const [loading, setLoading] = useState(true);
  
  const getLinks = async () => {
    try {
      const res = await axios.get("/api/projects/getlinks");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch project links:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getLinks();
  }, []);
  
  if (loading) {
    return <ProjectLinksSkeleton />;
  }
  
  return (
    <div className="transition-all duration-300 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md bg-white dark:bg-gray-900 w-full max-w-xs">
      <div className="flex flex-col space-y-3">
        <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Full Stack Projects
        </h3>
        
        {data === null ? (
          <Loading>Loading Projects</Loading>
        ) : (
          <div className="flex flex-col space-y-2">
            {data.map((link, index) => (
              <ProjectLink key={index} params={link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}