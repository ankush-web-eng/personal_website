"use client";

import { useEffect, useState } from "react";;
import Freelance from "@/components/pages/freelance";
import { TbLoader2 } from "react-icons/tb";

export default function FreelancePage() {
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
    <Freelance />
  );
}
