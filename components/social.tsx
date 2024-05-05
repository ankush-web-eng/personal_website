"use client"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Sociallinks = () => {
    return (
        <div className="flex md:space-x-6 justify-evenly md:w-max w-screen">
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-slate-100 dark:bg-inherit"><Link href="https://github.com/ankush-web-eng/"><FaGithub size={30} color="green" /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-blue-100 dark:bg-inherit"><Link href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" ><FaLinkedin color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-blue-100 dark:bg-inherit"><Link href="https://twitter.com/Ankush__57s" ><FaTwitter color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-blue-100 dark:bg-inherit"><Link href="https://instagram.com/whyankush07/" /><FaInstagram color="red" size={30} /></div>
        </div>
    )
}