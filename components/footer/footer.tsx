import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface FooterProps {
  link: string;
  text: string;
}

export default function Footer({ link, text }: FooterProps) {
  return (
    <div className="w-fit p-4 text-slate-800 dark:bg-slate-300 flex flex-col border- border-sky-400 bg-white dark:bg-inherit rounded-sm ">
      {text}
      <span className="text-sky-500">
        <Link href={link}>
          Click here <FaArrowRight />
        </Link>
      </span>
    </div>
  );
}
