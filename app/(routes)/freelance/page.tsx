import Freelance from "@/components/pages/freelance";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Freelance",
  description : "Ankush's World's Freelance and resume page",
  keywords : "freelance, resume, ankush, ankushcodes, ankush's world"
}

export default function Page() {
  return <Freelance />
}