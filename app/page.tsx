"use client"
import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="overflow-auto ">
      <div className="hidden md:flex flex-row">
        <Navbar />
        <Homepage />
      </div>
      <div className="flex md:hidden flex-col">
        <Homepage />
        <Navbar />
      </div>
    </div>
  );
}
