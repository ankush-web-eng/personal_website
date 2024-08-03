import Link from "next/link";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import { RiMailCheckFill } from "react-icons/ri";
import { getServerSession } from "next-auth";
import CV from "@/components/includes/cv"

const GetALlLinks = dynamic(() => import("@/components/projects/getalllinks"))
const Skills = dynamic(() => import("@/components/includes/skills"))
const Form = dynamic(() => import("@/components/includes/form"))
const GetAllProjects = dynamic(() => import("@/components/projects/getallprojects"))

export default async function Freelance() {

  const session = await getServerSession()
  const user = session?.user

  return (
    <div className="flex flex-col space-y-5">
      <h1 className="text-sky-500 text-6xl font-bold">Resume</h1>

      <p className="text-gray-500 dark:text-slate-300">
        Being a developer, I need to keep polishing my skills to keep myself
        updated.
      </p>

      <h2 className="text-gray-500 dark:text-slate-300">
        If you are a Client looking for a freelancer, you are at{" "}
        <span className="text-sky-500">right place</span>. Feel free to contact
        me through my Social media handles or by mailing me. You can direct
        provide details about yourself at{" "}
        <span className="text-sky-500">bottom</span> of the page.
      </h2>

      <span className="text-slate-500 dark:text-slate-300">
        I keep sharing on my my work and projects related to Full Stack
        and Tech.Drop me a high on <Link href={'https://x.com/Ankush__57s'} className="text-sky-500">Twitter</Link>{" "}as well as
        <Link href={'www.linkedin.com/in/ankush-singh07'} className="text-sky-500">LinkedIn</Link>
      </span>

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
      <div className="md:hidden"><GetALlLinks /></div>
      <GetAllProjects />
      <Skills />

      <h1 className="text-4xl font-bold py-3">
        Connect with <span className="text-sky-500">Me</span>
      </h1>
      <Form />

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
      <div className="pb-3"></div>
    </div>
  );
}
