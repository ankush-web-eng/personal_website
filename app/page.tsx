"use client"
import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="overflow-auto ">
      <div className="hidden md:flex ">
        <Navbar />
        <div className="pl-4 w-1/2">
          <Homepage />
        </div>
      </div>
      <div className="flex md:hidden flex-col">
        <Homepage />
        <Navbar />
      </div>
    </div>
  );
}
