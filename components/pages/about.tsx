import Image from "next/image";
import Link from "next/link";

import { RiMailCheckFill } from "react-icons/ri";

import Footer from "@/components/footer/footer";
import GetALlLinks from "@/components/projects/getalllinks";

export default function About() {
  return (
    <div className="flex flex-col space-y-5">
      <h1 className="md:text-7xl text-3xl font-bold">
        Hi, I&apos;m <span className="text-sky-500 font-bold">Ankush</span>
      </h1>

      <Image
        src="/IMG_1705.JPG"
        alt="about image"
        className=""
        height={520}
        width={520}
        loading="eager"
        fetchPriority="high"
      />

      <h1 className="text-5xl text-sky-500 font-bold">
        <span className="text-black dark:text-white">About</span> Me
      </h1>

      <h2 className="text-2xl font-bold">Short Bio</h2>

      <span className="text-slate-500 dark:text-gray-300">
        I am a full stack developer with a passion for creating beautiful and
        functional web applications. I chose this as a career because I love to
        create nice stuff. <span className="text-sky-500">Creativity</span> is
        the key. Now I target building some awesome stuff that can help people
        in their daily life.
      </span>

      <span className="text-slate-500 dark:text-gray-300">
        I am currently working as a{" "}
        <span className="text-sky-500">Freelance Developer</span> and a{" "}
        <span className="text-sky-500">Full Stack Developer Intern</span> and I
        am open to new opportunities. I have a healthy obsession of learning new
        everyday which makes a better developer and a better{" "}
        <span className="text-sky-500">Athlete</span>. I love playing{" "}
        <span className="text-sky-500">Cricket, Badminton & Basketball</span>.
      </span>

      <span className="text-slate-500 dark:text-gray-300">
        I am a Content Writer and I love to write blogs on life and my
        experiences. I am a Content Creator and I love to create content on
        Self-Growth and my learnings. I own two Instagram pages. One for
        storytelling Content{" "}
        <a className="text-sky-500" href="https://instagram.com/whyankush07">
          @whyankush07{" "}
        </a>
        and another for tech content{" "}
        <a className="text-sky-500" href="https://instagram.com/howankush07">
          @howankush07
        </a>
      </span>

      <h1 className="text-2xl pt-2 pb-1 font-bold">Education</h1>
      <span className="text-slate-500 dark:text-gray-300">
        I am currently pursuing a Bachelor&quot;s degree in Computer Science
        from <span className="text-sky-500">GLA University, Mathura</span>. I
        have completed my higher and secondry Education from Rajasthan Board. I
        secured <span className="text-sky-500">97%</span> in my class 10th and{" "}
        <span className="text-sky-500">85.6%</span> in clas 12th.
      </span>

      <h1 className="text-2xl font-bold">Why Computer Science?</h1>

      <span className="text-gray-500 dark:text-gray-300">
        Initially, I was quite confused in life about deciding what to chose as
        a career so I decided to go with the flow. In India, the most followed
        degree is Engineering and I chose it&quot;s most popular branch Computer
        Science. I am quite happy with my decision as I am
        <span className="text-sky-500"> passionate</span> about development I
        and <span className="text-sky-500">love to create nice stuff</span>.
        <span className="text-gray-500 dark:text-gray-300">
          the most beautiful part about being a developer is{" "}
          <span className="text-sky-500"> Creativity</span> and{" "}
          <span className="text-sky-500">Problem solving</span>
          Then it opens the horizon to learn new technologies and take pride as
          a developer. Because imagining this world without developers is like{" "}
          <span className="text-sky-500">
            imagining a world without oxygen.{" "}
          </span>
          cause at the end of the day, we are the one who are responsible for
          making this world a better place. And chaotic at the same time.😉
        </span>
      </span>

      <div className="h-fit pt-4 px-3 md:hidden">
        <GetALlLinks />
      </div>
      <div className="py-6 grid grid-cols-1 md:grid-cols-2 md:space-y-4">
        <Footer link="/kaizen" text="Want to explore my Blogs Page ?" />
        <Footer
          link="/freelance"
          text="Are you a client looking for project work?"
        />

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
