"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Ghost from "./ghost";
import Loading from "../loading";
import Link from "next/link";
import TwoGhostsSkeleton from "@/components/skeleton/TwoGhostsSkeleton";

interface Form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default function TwoGhosts() {
  const [ghosts, setGhosts] = useState<Form[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);

  const shuffleArray = <T,>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const getGhosts = useCallback(async () => {
    try {
      const res = await axios.get("/api/ghost/getallghosts");
      const shuffledGhosts = shuffleArray(res.data.data) as Form[];
      setGhosts(shuffledGhosts.slice(0, 4));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch ghosts:", error);
    }
  }, []);

  useEffect(() => {
    getGhosts();
  }, [getGhosts]);

  if (isLoading) {
    return <TwoGhostsSkeleton />;
  }

  return (
    <div className="pt-4 pb-6 flex space-y-2 flex-col px-3 md:px-6">
      <h1 className="text-4xl text-sky-500 w-fit font-bold my-6">Blogs</h1>
      <div className="rounded-xl text-black w-full h-auto md:grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 gap-2">
        {ghosts !== null && ghosts.length > 0 ? (
          ghosts.map((ghost, index) => <Ghost key={index} params={ghost} />)
        ) : (
          <Loading>Loading Blogs</Loading>
        )}
      </div>
      <h2 className="text-sky-500">
        <Link href="/kaizen">Read More on Blogs Section</Link>
      </h2>
    </div>
  );
}
