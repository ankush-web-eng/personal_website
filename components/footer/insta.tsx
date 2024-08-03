import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Insta(){
    return (
        <div className="py-3 px-5 w-fit h-auto flex items-center justify-center flex-col space-y-2 dark:border-sky-400 border rounded-xl bg-gray-50 dark:bg-inherit">
            <span className="font-semibold">I create Content!</span>
            <Link target="_ankush" href={'https://instagram.com/whyankush07/'} className="text-sky-500 font-bold italic flex space-x-2 hover:text-sky-600">
                <span>Check out @whyankush07</span>
                <FaArrowRight color="blue" />
            </Link>
        </div>
    )
}   