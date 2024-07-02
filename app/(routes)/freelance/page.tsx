import Freelance from "@/components/pages/freelance";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Resume"
}

export default function Page() {
  return <Freelance />
}