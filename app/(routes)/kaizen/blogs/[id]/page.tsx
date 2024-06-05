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
  image: string;
  content: string[];
  type: string;
}

export default function Page({ params }: { params: Params }) {
  const id = params.id;

  const [data, setData] = useState<form | null>(null);
  
  const getProject = async () => {
    try {
      const response = await axios.get(`/api/ghost/getghost/${id}`);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  console.log(data);
  const router = useRouter()


  useEffect(() => {
    getProject();
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let sym = '",'
  let newData = data?.content.toString() || ""
  let sarray = newData.split(sym) 
  let array = new Array()
  for (let i of sarray){
    array.push(i.replace(/["[]/g, ""))
  }
  // console.log(array);

  if (!mounted) return null;

  return (
    <div className="h-screen w-full pb-6 md:px-20 flex flex-col justify-start px-3 pt-8 space-y-10">
      <span onClick={() => router.back()}>
        <IoMdArrowRoundBack color="blue" size={28} />
      </span>
      <h1 className="text-4xl font-extrabold">
        {data?.title || <Loading>Loading Blog</Loading>}
      </h1>
      <p className="text-slate-700 text-2xl">{data?.subtitle}</p>
      {/* <p className="text-slate-700 text-2xl">{data?.content}</p> */}

      {data && array.map( (data, index) => (
        <p className="text-slate-700 text-2xl" key={index} >{data}</p>
      ))}
    </div>
  );
}
