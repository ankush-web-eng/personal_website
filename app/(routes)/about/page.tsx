import { Metadata } from "next";
import About from "@/components/pages/about";

export const metadata : Metadata = {
  title : "Know Me Better",
  description : "Get to know me better, my skills, my work and my journey.",
  keywords : "Ankush, Portfolio, About, Skills, Work, Journey",
}

export default function Page(){
  return <About />
}