"use client";
// import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import Homepage from "@/components/homepage";
import { useEffect, useState } from "react";
import GetALlLinks from "@/components/projects/getalllinks";

export default function Home() {


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
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
  );
}
