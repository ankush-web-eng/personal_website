import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { RiMailCheckFill } from "react-icons/ri";

import Sociallinks from "@/components/includes/social";
import TypewriterMain from "@/components/library/type";
import GetSingleProjectsSkeleton from "@/components/skeleton/TwoProjectSkeleton";
import TwoGhostsSkeleton from "@/components/skeleton/TwoGhostsSkeleton";

const GetALlLinks = dynamic(() => import("@/components/projects/getalllinks"));
const GetSingleProjects = dynamic(() => import("@/components/projects/getsingleproject"), { ssr: false, loading: () => <GetSingleProjectsSkeleton /> });
const TwoGhosts = dynamic(() => import("@/components/ghost/twoghosts"), { ssr: false, loading: () => <TwoGhostsSkeleton /> });
const LazyIframe = dynamic(() => import("@/components/includes/youtubeIntro"));

export default function Homepage() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="relative">
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

      <Sociallinks />

      <p className="text-gray-600 dark:text-gray-300">
        I am constantly learning new technologies and sharing my achievements on
        LinkedIn.
        <br />
        You can view my work here on LinkedIn{" "}
        <Link
          href="www.linkedin.com/in/ankush-singh07"
          target="ankush"
          className="text-sky-500"
          aria-label="Ankush Singh LinkedIn"
        >
          @Ankush Singh
        </Link>
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        I creates content on Instagram on Self-Growth and share my learnings on
        priciple of Kaizen. Kaizen is Japanese Priciple which means getting
        better on daily basis. You can view my content on Instagram{" "}
        <a
          href="https://www.instagram.com/whyankush07/"
          target="ankush"
          className="text-sky-500"
          aria-label="Ankush Singh Instagram"
        >
          @whyankush07
        </a>
      </p>
      <div className="md:hidden"><GetALlLinks /></div>
      <TwoGhosts />
      <GetSingleProjects />

      <div className="pt-4 rounded-md max-w-screen md:max-w-1/2 flex items-center justify-center">
        <LazyIframe />
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
