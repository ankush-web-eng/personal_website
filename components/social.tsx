"use client"
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Sociallinks = () => {
    return (
        <div className="flex space-x-6 w-screen md:w-max justify-center items-center">
            <span><Link href="https://github.com/ankush-web-eng/"><FaGithub size={30}/>
            </Link></span>
            <span><Link href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" ><FaLinkedin color="blue" size={30}/></Link></span>
            <span><Link href="https://www.instagram.com/ankush__57s/" /><FaInstagram color="red" size={30}/></span>
            <span><Link href="https://twitter.com/Ankush__57s" ><FaTwitter color="blue" size={30}/></Link></span>
        </div>
    )
}