
import CarouselComp from "./carousel";
import Link from "next/link";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import AllBlogs from "@/components/blog/getallblogs";


export default function Kaizen() {
    return (
        <div className="flex flex-col space-y-5">
            <CarouselComp />
            <h1 className="text-5xl text-blue-500 font-bold">
              <span className="text-black dark:text-white">Hey</span> Kaizenist
            </h1>
            <span className="">New to word Kaizen?</span>
            <span className="text-slate-500">
              <a className="text-blue-500">Kaizen</a> is a Japanese business
              philosophy of continuous improvement of working practices,
              personal efficiency, etc. <br />
              Well I am a firm believer in Kaizen and decided to create a
              section on my Personal Website. I also creates content on
              Instagram on Self-Growth and share my learnings on priciple of
              Kaizen. You can view my content on Instagram{" "}
              <a
                href="https://www.instagram.com/whyankush07/"
                target="ankush"
                className="text-blue-500"
              >
                @whyankush07.
              </a>
            </span>
            <h1 className="text-3xl text-blue-500 font-bold">
              Read my Blogs on kaizen
            </h1>
            <AllBlogs />
            <div className="flex justify-center text-sky-500 text-2xl"><a target="_ankush" href="https://kaizen-blogs.onrender.com">Visit my new Website for Blogs</a></div>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm ">
                Want to know more about me ?
                <span className="text-blue-500">
                  <Link href="/about">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm ">
                Are you a client looking for project work?
                <span className="text-blue-500">
                  <Link href="/freelance">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm ">
                Want to connect with me via Mail?
                <span className="text-blue-500 flex space-x-2">
                  <RiMailCheckFill />
                  <Link href="https://mail.google.com/">
                    deshwalankush23@gmail.com
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="pb-2 pt-3"></div>
          </div>
    )
}