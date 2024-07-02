import { Metadata } from "next";
import About from "@/components/pages/about";

export const metadata : Metadata = {
  title : "Know Me Better"
}

export default function Page(){
  return <About />
}