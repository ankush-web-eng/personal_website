"use client";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Kaizen from "@/components/pages/kaizen"
import GetALlLinks from "@/components/projects/getalllinks";
import PageWrapper from "@/app/page-wrapper";
import { TbLoader2 } from "react-icons/tb";

export default function KaizenPage() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <TbLoader2 className="animate-spin w-1/5 h-1/5 text-sky-500" />
      </div>
    );


  return (
    <PageWrapper>
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <Kaizen />
        </div>
        <div className="h-fit pt-28 px-6"><GetALlLinks /></div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-2 pr-2 pt-8 w-full flex flex-col">
          <Header />
          <Kaizen />
        </div>
        <Navbar />
      </div>
    </div>
    </PageWrapper>
  );
}
