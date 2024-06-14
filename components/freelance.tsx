import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import Skills from "@/components/skills";
import CarouselComp from "@/components/carousel";
import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import GetAllProjects from "@/components/getallprojects";

import { FaArrowRight } from "react-icons/fa";
import { RiMailCheckFill } from "react-icons/ri";
import Footer from "./footer/footer";
import GetALlLinks from "./projects/getalllinks";

export default function Freelance() {
  const [user, setUser] = useState<string>("null");

  const getUserName = async () => {
    try {
      const data = await axios.get("/api/users/getuser");
      if (data.data.data === null) {
        setUser("null");
      } else {
        setUser(data.data.data.email);
      }
    } catch (error) {
      console.log("Server Side Error");
      alert("Server Side Error");
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  const openCV = () => {
    window.open("/Resume.pdf", "_blank");
  };

  return (
    <div className="flex flex-col space-y-5">
      {/* <CarouselComp /> */}
      <h1 className="text-blue-500 text-6xl font-bold">Resume</h1>

      <p className="text-gray-500">
        Being a developer, I need to keep polishing my skills to keep myself
        updated.
      </p>

      <h2 className="text-gray-500">
        If you are a Client looking for a freelancer, you are at{" "}
        <span className="text-blue-500">right place</span>. Feel free to contact
        me through my Social media handles or by mailing me. You can direct
        provide details about yourself at{" "}
        <span className="text-blue-500">bottom</span> of the page.
      </h2>

      <span className="text-slate-500">
        I keep sharing on my my work and projects related to Full Stack 
        and Tech.Drop me a high on <Link href={'https://x.com/Ankush__57s'} className="text-sky-500">Twitter</Link>{" "}as well as 
        <Link href={'www.linkedin.com/in/ankush-singh07'} className="text-sky-500">LinkedIn</Link>
      </span>

      <div className="flex space-x-4 justify-start">
        <Button variant="primary" onClick={openCV}>
          Download CV
        </Button>
        <div>
          {user == "deshwalankush23@gmail.com" && (
            <Link href={"/addmyproject"}>
              <Button variant="primary">Add Project</Button>
            </Link>
          )}
        </div>
      </div>

      <GetAllProjects />
      <Skills />

      <div className="h-fit pt-3 px-3 md:hidden">
        <GetALlLinks />
      </div>

      <h1 className="text-4xl font-bold py-3">
        Connect with <span className="text-blue-500">Me</span>
      </h1>
      <Form />

      <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
        <Footer link="/about" text="Want to know more about me ?" />
        <Footer link="/kaizen" text="Want to explore my Blogs Page ?" />

        <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm">
          Want to connect with me via Mail?
          <span className="text-blue-500 flex space-x-2">
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
