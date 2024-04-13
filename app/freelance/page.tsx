"use client";

import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import dynamic from "next/dynamic";
import Freelance from "@/components/freelance";


function ContactUs() {

  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6">
          <Header />
          <Freelance />
        </div>
      </div>
      <div className="md:hidden flex">
        <div className="flex h-screen w-full space-y-6 flex-col pt-8 pl-2 pr-2">
          <Header />
          <Freelance />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
