import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function YouTube() {
    return (
        <div className="py-3 px-5 w-fit h-auto flex items-center justify-center flex-col space-y-2 dark:bg-blue-950/20 rounded-xl bg-gray-50 shadow-md dark:shadow-blue-950">
            <span className="font-semibold">I Teach!</span>
            <Link target="_blank" href={'https://youtube.com/whyankush07/'} className="text-sky-500 font-bold italic flex space-x-2 hover:text-sky-600">
                <span>Check out @whyankush07</span>
                <FaArrowRight color="blue" />
            </Link>
        </div>
    )
}

export const TestimonialLink = () => {
    return (
        <div className="py-3 px-5 w-fit h-auto flex items-center justify-center flex-col space-y-2 dark:bg-blue-950/20 rounded-xl bg-gray-50 shadow-md dark:shadow-blue-950">
            <Link target="_ankush" href={'/freelance'} className="text-sky-500 font-bold italic flex space-x-2 hover:text-sky-600">
                <span>Testimonials</span>
                <FaArrowRight color="blue" />
            </Link>
        </div>
    )
}