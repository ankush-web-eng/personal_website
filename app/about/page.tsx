import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React from "react";
import Link from "next/link";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function page() {
  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
            <h1 className="text-7xl">
              Hi, I&apos;m <span className="text-blue-500 font-bold">Ankush</span>
            </h1>
            <Image
              src="/ankush-pro.png"
              alt="about image"
              className="rounded-full"
              height={520}
              width={520}
            />
            <h1 className="text-5xl text-blue-500 font-bold">
              <span className="text-black dark:text-white">About</span> Me
            </h1>
            <h2 className="text-2xl font-bold">Short Bio</h2>
            <span className="text-gray-400">
              I am a full stack developer with a passion for creating beautiful
              and functional web applications. I have experience working with
              React, Next.js, Node.js, Express, MongoDB, and Firebase. I am
              always looking to learn new technologies and improve my skills.
            </span>
            <span className="text-slate-500">
              I am currently working as a freelance developer and am open to new
              opportunities. If you have a project you would like to discuss, or
              just want to say hi, feel free to contact me at{" "}
              <span className="text-sky-500">deshwalankush23@gmail.com</span>
            </span>
            <h1 className="text-2xl py-2 font-bold">Education</h1>
            <span className="text-slate-500">
              I am currently pursuing a Bachelor&quot;s degree in Computer Science
              from <span className="text-sky-500">GLA University, Mathura</span>. I have completed my higher and
              secondry Education from Rajasthan Board.
            </span>
            <h1 className="text-2xl font-bold">Why Computer Science?</h1>
            <span className="text-gray-500">
              Initially, I was quite confused in life about deciding what to
              chose as a career so I decided to go with the flow. In India, the
              most followed degree is Engineering and I chose it&quot;s most popular
              branch Computer Science. I am quite happy with my decision as I am
              <span className="text-sky-500"> passionate</span> about
              development I and{" "}
              <span className="text-sky-500">love to create nice stuff</span>.
              <span className="text-gray-500">
                the most beautiful part about being a developer is{" "}
                <span className="text-sky-500"> Creativity</span> and{" "}
                <span className="text-sky-500">Problem solving</span>
                Then it opens the horizon to learn new technologies and take
                pride as a developer. Because imagining this world without
                developers is like{" "}
                <span className="text-sky-500">
                  imagining a world without oxygen.{" "}
                </span>
                cause at the end of the day, we are the one who are responsible
                for making this world a better place. And chaotic at the same
                time.😉
              </span>
            </span>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to explore my blogs page ?
                <span className="text-blue-500">
                  <Link href="/kaizen">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Are you a client looking for project work?
                <span className="text-blue-500">
                  <Link href="/freelance">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to connect with me via Mail?
                <span className="text-blue-500 flex space-x-2">
                  <RiMailCheckFill />
                  <Link href="https://mail.google.com/">
                    deshwalankush23@gmail.com
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="pb-6 pt-3"></div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-6 pt-8 w-full flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
            <h1 className="text-6xl">
              Hi, I&apos;m <span className="text-blue-500 font-bold">Ankush</span>
            </h1>
            <Image
              src="/ankush-pro.png"
              alt="about image"
              className="rounded-full"
              height={520}
              width={520}
            />
            <h1 className="text-5xl text-blue-500 font-bold">
              <span className="text-black dark:text-white">About</span> Me
            </h1>
            <h2 className="text-2xl font-bold">Short Bio</h2>
            <span className="text-gray-400">
              I am a full stack developer with a passion for creating beautiful
              and functional web applications. I have experience working with
              React, Next.js, Node.js, Express, MongoDB, and Firebase. I am
              always looking to learn new technologies and improve my skills.
            </span>
            <span className="text-slate-500">
              I am currently working as a freelance developer and am open to new
              opportunities. If you have a project you would like to discuss, or
              just want to say hi, feel free to contact me at{" "}
              <span className="text-sky-500">deshwalankush23@gmail.com</span>
            </span>
            <h1 className="text-2xl py-2 font-bold">Education</h1>
            <span className="text-slate-500">
              I am currently pursuing a Bachelor&quot;s degree in Computer Science
              from <span className="text-sky-500">GLA University, Mathura</span>. I have completed my higher and
              secondry Education from Rajasthan Board.
            </span>
            <h1 className="text-2xl font-bold">Why Computer Science?</h1>
            <span className="text-gray-500">
              Initially, I was quite confused in life about deciding what to
              chose as a career so I decided to go with the flow. In India, the
              most followed degree is Engineering and I chose it&quot;s most popular
              branch Computer Science. I am quite happy with my decision as I am
              <span className="text-sky-500"> passionate</span> about
              development I and{" "}
              <span className="text-sky-500">love to create nice stuff</span>.
              <span className="text-gray-500">
                the most beautiful part about being a developer is{" "}
                <span className="text-sky-500"> Creativity</span> and{" "}
                <span className="text-sky-500">Problem solving</span>
                Then it opens the horizon to learn new technologies and take
                pride as a developer. Because imagining this world without
                developers is like{" "}
                <span className="text-sky-500">
                  imagining a world without oxygen.{" "}
                </span>
                cause at the end of the day, we are the one who are responsible
                for making this world a better place. And chaotic at the same
                time.😉
              </span>
            </span>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to explore my blogs page ?
                <span className="text-blue-500">
                  <Link href="/kaizen">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Are you a client looking for project work?
                <span className="text-blue-500">
                  <Link href="/freelance">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to connect with me via Mail?
                <span className="text-blue-500 flex space-x-2">
                  <RiMailCheckFill />
                  <Link href="https://mail.google.com/">
                    deshwalankush23@gmail.com
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="pb-6 pt-3"></div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default page;
