"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterMain() {
  const words = [
    {
      text: "I",
    },
    {
      text: "make",
    },
    {
      text: "Full",
      className: "text-teal-500 dark:text-teal-500",
    },
    {
      text: "Stack",
      className: "text-teal-500 dark:text-teal-500",
    },
    {
      text: "Web",
    },
    {
      text: "Apps",
    },
  ];
  return (
    <div className="flex items-center justify-start h-fit">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
