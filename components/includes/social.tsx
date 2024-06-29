"use client"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Sociallinks = () => {
    return (
        <div className="flex justify-evenly md:space-x-4 md:w-max w-screen">
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit"><Link target="_ankush" href="https://github.com/ankush-web-eng/"><FaGithub size={30} color="black" /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit"><Link target="_ankush" href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" ><FaLinkedin color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit"><Link target="_ankush" href="https://twitter.com/Ankush__57s" ><FaTwitter color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit"><Link target="_ankush" href="https://www.instagram.com/howankush07/" /><FaInstagram color="red" size={30} /></div>
        </div>
    )
}