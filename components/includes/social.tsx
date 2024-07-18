
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Sociallinks() {
    return (
        <div className="flex justify-evenly md:space-x-4 py-4 md:w-max w-screen">
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <Link aria-label="GitHub Link" target="_ankush" href="https://github.com/ankush-web-eng/"><FaGithub size={30} color="green" /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <Link aria-label="LinkedIn Link" target="_ankush" href="https://www.linkedin.com/in/whyankush07" ><FaLinkedin color="blue" size={30} /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <Link aria-label="Twitter Link" target="_ankush" href="https://twitter.com/whyankush07" ><FaTwitter color="blue" size={30} /></Link>
            </div>
            <div className="rounded-xl pl-10 pb-10 pt-2 pr-2 border bg-sky-200 border-sky-500 dark:bg-inherit">
                <Link aria-label="Instagram Link" target="_ankush" href="https://www.instagram.com/whyankush07/" /><FaInstagram color="red" size={30} />
            </div>
        </div>
    )
}