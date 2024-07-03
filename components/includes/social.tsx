
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Sociallinks() {
    return (
        <div className="flex justify-evenly md:space-x-4 py-4 md:w-max w-screen">
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <span className="sr-only">GitHub</span>
                <Link target="_ankush" href="https://github.com/ankush-web-eng/"><FaGithub size={30} color="green" /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <span className="sr-only">LinkedIn</span>
                <Link target="_ankush" href="https://www.linkedin.com/in/ankush-singh-b0389b27b/" ><FaLinkedin color="blue" size={30} /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <span className="sr-only">Twitter / X</span>
                <Link target="_ankush" href="https://twitter.com/Ankush__57s" ><FaTwitter color="blue" size={30} /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <span className="sr-only">Instagram</span>
                <Link target="_ankush" href="https://www.instagram.com/howankush07/" /><FaInstagram color="red" size={30} />
            </div>
        </div>
    )
}