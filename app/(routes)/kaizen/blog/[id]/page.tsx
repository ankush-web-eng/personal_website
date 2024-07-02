"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

import { IoMdArrowRoundBack } from "react-icons/io";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";

type Params = {
  id: string;
};

interface form {
  id: string;
  title: string;
  subtitle: string;
  para1 : string;
  para2 : string;
  para3 : string;
  para4 : string;
  para5 : string;
}

export default function Page({ params }: { params: Params }) {
  const id = params.id;

  const [data, setData] = useState<form | null>(null);
  
  const getProject = async () => {
    try {
      const response = await axios.get(`/api/blogs/getblog/${id}`);
      setData(response.data.data);
    } catch (error) {
    }
  };
  
  const router = useRouter()


  useEffect(() => {
    getProject();
  });



  return (
    <div className="h-screen w-full pb-6 md:px-20 flex flex-col justify-start px-3 pt-8 space-y-10">
      <span onClick={() => router.back()}>
        <IoMdArrowRoundBack color="blue" size={28} />
      </span>
      <h1 className="text-4xl font-extrabold">
        {data?.title || <Loading>Loading Blog</Loading>}
      </h1>
      <p className="text-slate-700 font-semibold text-2xl">{data?.subtitle}</p>
      {/* <p className="text-slate-700 text-2xl">{data?.content}</p> */}

        <p className="text-slate-700 text-sm">{data?.para1}</p>
        <p className="text-slate-700 text-sm">{data?.para2}</p>
        <p className="text-slate-700 text-sm">{data?.para3}</p>
        <p className="text-slate-700 text-sm">{data?.para4}</p>
        <p className="text-slate-700 text-sm">{data?.para5}</p>
    </div>
  );
}
