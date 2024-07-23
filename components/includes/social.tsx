
import Image from "next/image";
import Link from "next/link"
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Sociallinks() {
    return (
        <div className="flex justify-evenly md:space-x-4 py-4 md:w-full w-screen">
            <Link target="_blank" href={"https://github.com/ankush-web-eng/"}>
                <Image src={'/github.svg'} height={36} width={36} alt="GitHub" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/whyankush07"}>
                <Image src={'/linkedin.svg'} height={36} width={36} alt="LinkedIn" />
            </Link>
            <Link target="_blank" href={"https://twitter.com/whyankush07"}>
                <Image src={'/twitter.svg'} height={36} width={36} alt="New" />
            </Link>
            <Link target="_blank" href={"https://leetcode.com/whyankush07"}>
                <Image src={'/leetcode.svg'} height={36} width={36} alt="New" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/whyankush07/"}>
                <Image src={'/instagram.svg'} height={36} width={36} alt="Instagram" />
            </Link>
        </div>
    )
}