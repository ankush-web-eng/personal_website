'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { RiMailCheckFill } from "react-icons/ri";
import CV from "@/components/includes/cv"
import GetSingleProjectsSkeleton from "@/components/skeleton/TwoProjectSkeleton";

import { ScrollAnimationWrapper } from "@/components/pages/homepage";
import { useSession } from "next-auth/react";
import Testimonials from "../freelance/testimonials";

const GetALlLinks = dynamic(() => import("@/components/projects/getalllinks"), { ssr: false })
const Skills = dynamic(() => import("@/components/includes/skills"), { ssr: false })
const Form = dynamic(() => import("@/components/includes/form"), { ssr: false })
const ApplicationGrid = dynamic(() => import("@/components/applications/applicationGrid"), { ssr: false })
const GetAllProjects = dynamic(() => import("@/components/projects/getallprojects"), { ssr: false, loading: () => <GetSingleProjectsSkeleton /> })
const FreelanceProjectsLink = dynamic(() => import("@/components/freelance/freelanceProjects"), { ssr: false })

export default function Freelance() {
  const {data:session} = useSession();
  const user = session?.user;

  return (
    <div className="flex flex-col space-y-5">
      <ScrollAnimationWrapper>
        <h1 className="text-sky-500 text-6xl font-bold">Resume</h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <p className="text-gray-500 dark:text-slate-300">
          Being a developer, I need to keep polishing my skills to keep myself
          updated.
        </p>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <h2 className="text-gray-500 dark:text-slate-300">
          If you are a Client looking for a freelancer, you are at{" "}
          <span className="text-sky-500">right place</span>. Feel free to contact
          me through my Social media handles or by mailing me. You can direct
          provide details about yourself at{" "}
          <span className="text-sky-500">bottom</span> of the page.
        </h2>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <span className="text-slate-500 dark:text-slate-300">
          I keep sharing on my my work and projects related to Full Stack
          and Tech.Drop me a high on{" "}
          <motion.a 
            href={'https://x.com/Ankush__57s'} 
            className="text-sky-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Twitter
          </motion.a>{" "}
          as well as{" "}
          <motion.a 
            href={'www.linkedin.com/in/ankush-singh07'} 
            className="text-sky-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            LinkedIn
          </motion.a>
        </span>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <div className="flex space-x-4 justify-start">
          <CV />
          <div>
            {user?.email == "deshwalankush23@gmail.com" && (
              <Link href={"/addmyproject"}>
                <Button variant="primary">Add Project</Button>
              </Link>
            )}
          </div>
        </div>
      </ScrollAnimationWrapper>
      
      <h1 className="text-4xl text-sky-500 py-4 w-fit font-bold ">Testimonials</h1>

      {/* <Testimonials /> */}

      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <GetALlLinks />
        </ScrollAnimationWrapper>
      </div>
      <div className="md:hidden">
        <ScrollAnimationWrapper>
          <FreelanceProjectsLink />
        </ScrollAnimationWrapper>
      </div>

      <ScrollAnimationWrapper direction="left">
        <GetAllProjects />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <ApplicationGrid />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper>
        <Skills />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <h1 className="text-4xl font-bold py-3">
          Connect with <span className="text-sky-500">Me</span>
        </h1>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="right">
        <Form />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper direction="left">
        <div className="py-6 flex space-x-6 space-y-4 flex-wrap">
          <motion.div 
            className="w-fit px-4 py-4 dark:text-slate-300 text-slate-500 dark:bg-inherit flex flex-col shadow-md dark:shadow-blue-950 bg-white rounded-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Want to connect with me via Mail?
            <motion.span 
              className="text-sky-400 flex space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <RiMailCheckFill />
              <Link href="mailto:ankushsingh.dev@gmail.com">
                ankushsingh.dev@gmail.com
              </Link>{" "}
            </motion.span>
          </motion.div>
        </div>
      </ScrollAnimationWrapper>
      <div className="pb-3"></div>
    </div>
  );
}