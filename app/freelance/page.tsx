"use client";

import { Navbar } from "@/components/navbar";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import Projects from "@/components/projects";
import Form from "@/components/form";
import dynamic from "next/dynamic";
import Skills from "@/components/skills";
import Image from "next/image";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CarouselComp from "@/components/carousel";



function ContactUs() {
  const openCV = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6">
          <Header />
          <div className="flex flex-col space-y-5">
            {/* <Image
              src="/freelance.png"
              className="rounded-md"
              height={320}
              width={640}
              alt="kaizen"
              fetchPriority="high"
            /> */}
            <CarouselComp />
            <p className="text-gray-500">
              Being a developer, I need to keep polishing my skills to keep
              myself updated.
            </p>
            <h2 className="text-gray-500">
              If you are a Client looking for a freelancer, you are at{" "}
              <span className="text-blue-500">right place</span>. Feel free to
              contact me through my Social media handles or by mailing me. You
              can direct provide details about yourself at{" "}
              <span className="text-blue-500">bottom</span> of the page.
            </h2>
            <div className="flex justify-start">
              <Button variant="primary" onClick={openCV}>
                Download CV
              </Button>
            </div>
            <div className="p-2"></div>
            <Projects />
            <div className="py-4"></div>
            <Skills />
            <div className="py-4"></div>
            <h1 className="text-4xl font-bold ">
              Connect with <span className="text-blue-500">Me</span>
            </h1>
            <Form />
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to know more about me ?
                <span className="text-blue-500">
                  <Link href="/about">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to explore my blogs page ?
                <span className="text-blue-500">
                  <Link href="/kaizen">
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
            <div className="pb-3"></div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex">
        <div className="flex h-screen w-full space-y-6 flex-col pt-8 pl-2 pr-2">
          <Header />
          <div className="flex flex-col space-y-5">
          {/* <Image
              src="/freelance.png"
              className="rounded-md"
              height={320}
              width={640}
              alt="kaizen"
              fetchPriority="high"
            /> */}
            <CarouselComp />
            <p className="text-gray-500">
              Being a developer, I need to keep polishing my skills to keep
              myself updated.
            </p>
            <h2 className="text-gray-500">
              If you are a Client looking for a freelancer, you are at{" "}
              <span className="text-blue-500">right place</span>. Feel free to
              contact me through my Social media handles or by mailing me. You
              can direct provide details about yourself at{" "}
              <span className="text-blue-500">bottom</span> of the page.
            </h2>
            <div className="flex justify-start">
              <Button variant="primary" onClick={openCV}>
                Download CV
              </Button>
            </div>
            <div className="p-2"></div>
            <Projects />
            <div className="py-4"></div>
            <Skills />
            <div className="py-4"></div>
            <h1 className="text-4xl font-bold ">
              Connect with <span className="text-blue-500">Me</span>
            </h1>
            <Form />
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to know more about me ?
                <span className="text-blue-500">
                  <Link href="/about">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to explore my blogs page ?
                <span className="text-blue-500">
                  <Link href="/kaizen">
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
            <div className="pb-4"></div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false });
