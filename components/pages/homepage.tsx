import Image from "next/image";
import Link from "next/link";

import { RiMailCheckFill } from "react-icons/ri";

import CarouselComp from "@/components/includes/carousel";
import { Sociallinks } from "@/components/includes/social";
import GetSingleProjects from "@/components/projects/getsingleproject";
import GetALlLinks from "@/components/projects/getalllinks"
import TwoGhosts from "@/components/ghost/twoghosts";
import { TypewriterMain } from "@/components/library/type";
import { Lamp } from "../library/lampview";


export default function Homepage() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="relative">
        <CarouselComp />
        <div className="absolute -bottom-[60px] left-2">
          <Image
            width={100}
            height={100}
            src={"/Ankush_pro.png"}
            className="rounded-full z-50"
            alt="Ankush"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="pt-8">
        <div className="flex justify-start text-start pt-8">
          <h1 className="font-semibold text-lg">
            Hi, I am <span className="text-sky-500">Ankush</span>
          </h1>
        </div>
        <div className="max-md:hidden"><TypewriterMain /></div>
        {/* <div className="md:hidden">
          <Lamp />
        </div> */}

        <h1 className="text-5xl font-bold md:hidden">
          I make <span className="text-teal-500">Full Stack</span> Web
          Applications
        </h1>
        
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        {" "}
        Freelancer, Developer, Writer, Content Creator, Student, Tech Enthusiast
        with passion for <span className="text-sky-500">Code.</span>
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        Quite <span className="text-sky-500">passionate</span> about Technology,
        I decided to do Computer Science and Content Creation in this life. I
        like to Code, Write, Create Content, Workout, Travel solo and meet new
        people.
      </p>
      <div className="py-4">
        <Sociallinks />
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        I am constantly learning new technologies and sharing my achievements on
        LinkedIn.
        <br />
        You can view my work here on LinkedIn{" "}
        <a
          href="www.linkedin.com/in/ankush-singh07"
          target="ankush"
          className="text-sky-500"
        >
          @Ankush Singh
        </a>
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        I creates content on Instagram on Self-Growth and share my learnings on
        priciple of Kaizen. Kaizen is Japanese Priciple which means getting
        better on daily basis. You can view my content on Instagram{" "}
        <a
          href="https://www.instagram.com/whyankush07/"
          target="ankush"
          className="text-sky-500"
        >
          @whyankush07
        </a>
      </p>

      {/* <SingleBlogs /> */}
      <TwoGhosts />
      <GetSingleProjects />

      <div className="pt-4 rounded-md max-w-screen md:max-w-1/2 flex items-center justify-center">
        <iframe
          className="rounded-lg"
          src="https://www.youtube.com/embed/UQ1loFxkfUE?si=CCzWqLXlv2YZhcze"
          title="About Ankush"
          // frameborder=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
        ></iframe>
      </div>

      <div className="h-fit pt-3 px-3 md:hidden">
        <GetALlLinks />
      </div>

      <div className="py-6 flex space-x-6 space-y-4 flex-wrap">
        <div className="w-fit px-4 py-4 dark:text-slate-300 text-slate-500 dark:bg-inherit flex flex-col border-2 border-sky-400 bg-white rounded-sm">
          Want to connect with me via Mail?
          <span className="text-sky-400 flex space-x-2">
            <RiMailCheckFill />
            <Link href="https://mail.google.com/">
              ankushsingh.dev@gmail.com
            </Link>{" "}
          </span>
        </div>
      </div>
      <div className="py-3"></div>
    </div>
  );
}
