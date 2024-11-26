import { Metadata } from "next";
import Kaizen from "@/components/pages/kaizen";

export const metadata: Metadata = {
  title : "Blogs",
  description: "Blogs and Articles on Web Development, Freelancing, Life and Tech",
  keywords: "Blogs, Articles, Web Development, Freelancing, Life, Tech, Ankush's World"
}

export default function Page(){
  return <Kaizen />
}