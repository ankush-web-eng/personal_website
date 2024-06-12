import { Metadata } from "next";
import MessagesPage from "./messages";

export const metadata : Metadata = {
  title : "Feedback"
}

export default function Page(){
  return <MessagesPage />
}