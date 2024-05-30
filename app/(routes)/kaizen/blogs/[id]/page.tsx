"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "@/components/loading";

type Params = {
  id: string;
};

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  para1: string;
  para2: string;
  para3: string;
  para4: string;
  para5: string;
}

export default function Page({ params }: { params: Params }) {
  const id = params.id;

  const [data, setData] = useState<ProjectData | null>(null);

  const getProject = async () => {
    try {
      const response = await axios.get(`/api/blogs/getblog/${id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="h-screen w-full pb-6 flex flex-col justify-start px-4 pt-8 space-y-10">
      <Link href={`/kaizen`}>
        <IoMdArrowRoundBack color="blue" size={28} />
      </Link>
      <h1 className="text-4xl font-extrabold">
        {data?.title || <Loading>Loading Blog</Loading>}
      </h1>
      <p className="text-slate-700 text-2xl">{data?.subtitle}</p>
      <p className="text-slate-500 ">{data?.para1}</p>
      <p className="text-slate-500 ">{data?.para2}</p>
      <p className="text-slate-500 ">{data?.para3}</p>
      <p className="text-slate-500 ">{data?.para4}</p>
      <p className="text-slate-500 ">{data?.para5}</p>
    </div>
  );
}
