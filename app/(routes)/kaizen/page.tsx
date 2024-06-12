import { Metadata } from "next";
import KaizenPage from "./kaizen";

export const metadata: Metadata = {
  title : "Blogs"
}

export default function Page(){
  return <KaizenPage />
}