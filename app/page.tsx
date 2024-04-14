"use client";
// import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import Homepage from "@/components/homepage";

export default function Home() {
  return (
    <div>
      <div className="hidden md:flex fixed overflow-y-auto">
        <Navbar />
        <div className="flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6">
          <Header />
          <Homepage />
        </div>
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
