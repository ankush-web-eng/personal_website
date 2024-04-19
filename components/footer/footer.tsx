import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

interface FooterProps {
    link: string;
    text: string;
  }
  
  export default function Footer({ link, text }: FooterProps) {
    return (
      <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm ">
        {text}
        <span className="text-blue-500">
          <Link href={link}>
            Click here <FaArrowRight />
          </Link>
        </span>
      </div>
    );
  }