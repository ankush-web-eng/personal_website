import axios from "axios";
import { useEffect, useState } from "react";
import Ghost from "./ghost";
import Loading from "../loading";
import Link from "next/link";

interface form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default function TwoGhosts() {
  const [ghosts, setGhosts] = useState<form[] | null>([]);

  const getGhosts = async () => {
    try {
      const res = await axios.get("/api/ghost/getallghosts");
      setGhosts(res.data.data.slice(0, 4));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGhosts();
  }, []);

  return (
    <div className="pt-4 pb-6 flex space-y-2 flex-col">
      <h1 className="text-4xl text-blue-500 w-fit font-bold my-6">Blogs</h1>
      <div className="rounded-xl text-black w-full h-auto md:grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 ">
        {ghosts !== null ? (
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
