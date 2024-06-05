import CarouselComp from "@/components/carousel";
import { Sociallinks } from "@/components/social";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import SingleBlogs from "@/components/blog/getsingleblog";
import GetSingleProjects from "@/components/projects/getsingleproject";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import GetALlLinks from "./projects/getalllinks";
import TwoGhosts from "./ghost/twoghosts";

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
          Hi, I am <span className="text-blue-400">Ankush</span>
        </h1>
      </div>
      <h1 className="text-5xl font-bold">
        I make <span className="text-green-500">Full Stack</span> Web
        Applications
      </h1>
      </div>

      <p className="text-gray-600 dark:text-gray-400">
        {" "}
        Freelancer, Developer, Writer, Content Creator, Student, Tech Enthusiast
        with passion for <span className="text-blue-500">Code.</span>
      </p>

      <div className="pt-8">
        <Sociallinks />
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        I am constantly learning new technologies and sharing my achievements on
        LinkedIn.
        <br />
        You can view my work here on LinkedIn{" "}
        <a
          href="www.linkedin.com/in/ankush-singh07"
          target="ankush"
          className="text-blue-500"
        >
          @Ankush Singh
        </a>
      </p>

      <p className="text-gray-600 dark:text-gray-400">
        I creates content on Instagram on Self-Growth and share my learnings on
        priciple of Kaizen. Kaizen is Japanese Priciple which means getting
        better on daily basis. You can view my content on Instagram{" "}
        <a
          href="https://www.instagram.com/whyankush07/"
          target="ankush"
          className="text-blue-500"
        >
          @whyankush07
        </a>
      </p>

      <p className="text-gray-600 dark:text-gray-400">
        I also creates content on Instagram on where I show my tech work. I have
        specialized it for my freelancing work. Visit it for professional
        purpose.{" "}
        <a
          href="https://www.instagram.com/howankush07/"
          target="ankush"
          className="text-blue-500"
        >
          @howankush07
        </a>
      </p>

      <p className="text-gray-600 dark:text-gray-400">
        I am building a <span className="text-sky-500">Freelancing</span> Agency with 5 high caliber freelancers from multiple domains 
        where we are determined to deliver quality products at great pace. View our page here at{" "}
        <a
          href="https://www.instagram.com/skillsphere07/"
          target="ankush"
          className="text-blue-500"
        >
          @skillsphere07
        </a>
      </p>

      {/* <SingleBlogs /> */}
      <TwoGhosts />
      <GetSingleProjects />

      <div className="pt-6 rounded-md max-w-screen md:max-w-1/2 flex items-center justify-center">
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

      <div className="h-fit pt-3 px-3 md:hidden"><GetALlLinks /></div>

      <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
        <Footer link="/about" text="Want to know more about me ?" />
        <Footer link="/kaizen" text="Want to explore my Blogs Page ?" />
        <Footer
          link="/freelance"
          text="Are you a client looking for project work?"
        />

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
    </div>
  );
}
