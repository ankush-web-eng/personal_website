"use client"

import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";
import About from "@/components/about";

export default function Page() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <About />
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-6 pt-8 w-full flex flex-col">
          <Header />
          <About />
        </div>
        <Navbar />
      </div>
    </div>
  );
}

