"use client"
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface Params {
  id: string;
  title: string;
  url: string;
  image: string;
}

interface ProjectLinkProps {
  params: Params;
}

export default function ProjectLink({ params }: ProjectLinkProps) {
  return (
    <Link 
      href={params.url} 
      target="_blank"
      className="group flex items-center justify-between text-sm font-medium"
    >
      <span className="text-gray-800 dark:text-gray-200">
        {params.title}
      </span>
      <FaArrowRight 
        className="text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all" 
        size={14}
      />
    </Link>
  );
}