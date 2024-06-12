import { Metadata } from "next";
import AboutPage from "./about";

export const metadata : Metadata = {
  title : "Know Me Better"
}

export default function Page(){
  return <AboutPage />
}