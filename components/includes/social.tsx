import Image from "next/image";
import Link from "next/link";

export default function Sociallinks() {
    return (
        <div className="flex justify-evenly md:space-x-4 py-4 md:w-full w-screen">
            <Link target="_blank" href={"https://github.com/ankush-web-eng/"}>
                <Image className="dark:invert" src={'/github.svg'} height={36} width={36} alt="GitHub" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/whyankush07"}>
                <Image className="dark:invert" src={'/linkedin.svg'} height={36} width={36} alt="LinkedIn" />
            </Link>
            <Link target="_blank" href={"https://twitter.com/whyankush07"}>
                <Image className="dark:invert" src={'/twitter.svg'} height={36} width={36} alt="Twitter" />
            </Link>
            <Link target="_blank" href={"https://leetcode.com/whyankush07"}>
                <Image className="dark:invert" src={'/leetcode.svg'} height={36} width={36} alt="LeetCode" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/whyankush07/"}>
                <Image className="dark:invert" src={'/instagram.svg'} height={36} width={36} alt="Instagram" />
            </Link>
        </div>
    );
}
