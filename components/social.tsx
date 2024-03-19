"use client"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Sociallinks = () => {
    return (
        <div className="flex space-x-6 w-max md:w-1/2 justify-evenly items-center">
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-slate-100"><Link href="https://github.com/ankush-web-eng/"><FaGithub size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-blue-100"><Link href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" ><FaLinkedin color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-10 pb-10 pt-2 mr-1 pr-2 border-2 bg-blue-100"><Link href="https://twitter.com/Ankush__57s" ><FaTwitter color="blue" size={30} /></Link></div>
            <div className="rounded-xl pl-4 pb-4 pt-2 mr-1 pr-2 border-2 bg-pink-100 flex-col"><Link href="https://www.instagram.com/ankush__57s/" /><FaInstagram color="red" size={30} /><p className="italic text-pink-400 text-sm">@ankush__57s</p></div>
        </div>
    )
}