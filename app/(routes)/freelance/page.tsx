import { Metadata } from "next";
import FreelancePage from "./freelance";

export const metadata : Metadata = {
  title : "Resume"
}

export default function Page() {
  return <FreelancePage />
}