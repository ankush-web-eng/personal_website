"use client";
// import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import Homepage from "@/components/homepage";
import { useEffect, useState } from "react";
import GetALlLinks from "@/components/projects/getalllinks";
import {motion, AnimatePresence} from "framer-motion";
import PageWrapper from "./page-wrapper";
import { TbLoader2 } from "react-icons/tb";

export default function Home() {

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
    <PageWrapper >
    <div className="">
      <div className="hidden md:flex fixed overflow-y-auto">
        <Navbar />
        <div className="flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6">
          <Header />
          <Homepage />
        </div>
        <div className="h-fit pt-28 px-6"><GetALlLinks /></div>
      </div>
      <div className="md:hidden flex">
        <div className="flex h-screen w-full space-y-6 flex-col pt-8 pl-3">
          <Header />
          <Homepage />
        </div>
        <Navbar />
      </div>
    </div>
    </PageWrapper>
  );
}
