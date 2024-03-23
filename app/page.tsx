"use client"
import { Homepage } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { Sociallinks } from "@/components/social";
import Link from "next/link"
import { BsMailbox } from "react-icons/bs";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className='hidden md:flex fixed overflow-y-auto'>
        <Navbar />
        <div className='flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6'>
          <Header />
          <div className='flex flex-col space-y-5'>
            <img src='./ankush_bg_image.png' className='rounded-md' />
            <div className="flex justify-start text-start"><h1 className="font-semibold text-lg">Hi, I'm <span className="text-blue-400">Ankush</span></h1></div>
            <h1 className="text-5xl font-bold ">I make <span className="text-green-500">Full Stack</span> Web Applications</h1>
            <p className="text-gray-600 dark:text-gray-400"> Student, Writer, Content Creator, Developer, tech enthusiast with passion for <span className="text-blue-500">Code.</span></p>
            <div className="pt-8"><Sociallinks /></div>
            <div className="pt-6"><video controls className="rounded-xl"><source src="/" /></video></div>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">Want to know more about me ?
              <span className="text-blue-500"><Link href="/about">Click here <FaArrowRight /></Link></span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">Want to explore my blogs page ?
              <span className="text-blue-500"><Link href="/kaizen">Click here <FaArrowRight /></Link></span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">Are you a client looking for project work?
              <span className="text-blue-500"><Link href="/freelance">Click here <FaArrowRight /></Link></span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">Want to connect with me via Mail?
              <span className="text-blue-500 flex space-x-2"><RiMailCheckFill /><Link href="https://mail.google.com/">deshwalankush23@gmail.com</Link> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex'></div>
    </div>
  );
}
