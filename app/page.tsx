"use client";
import Homepage from "@/components/pages/homepage"
import { useEffect, useState } from "react";
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
    <Homepage />
  );
}
