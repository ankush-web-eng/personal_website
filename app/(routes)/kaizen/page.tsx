import { Metadata } from "next";
import Kaizen from "@/components/pages/kaizen";

export const metadata: Metadata = {
  title : "Blogs"
}

export default function Page(){
  return <Kaizen />
}