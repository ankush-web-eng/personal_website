"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectLink from "./getlink";
import Loading from "../loading";
import ProjectLinksSkeleton from "@/components/skeleton/ProjectLinkSkeleton";

interface params {
  id: string;
  title: string;
  url: string;
  image: string;
}

export default function GetALlLinks() {
  const [data, setData] = useState<params[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/projects/getlinks");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  if (loading){
    return <ProjectLinksSkeleton />
  }

  return (
    <div className="bg-gray-50 shadow-md drop-shadow-md dark:shadow-blue-950 dark:bg-blue-950/20 rounded-xl space-y-2 flex flex-col p-3">
      <h1 className="text-neutral-600 dark:text-gray-100 font-semibold">Full Stack Projects:</h1>
      {data == null ? <Loading >Loading Links</Loading> :
        data.map((link, index) => <ProjectLink key={index} params={link} />)}
    </div>
  );
}
