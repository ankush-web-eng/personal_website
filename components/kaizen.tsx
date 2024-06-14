import CarouselComp from "./carousel";
import Link from "next/link";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import AllBlogs from "@/components/blog/getallblogs";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./footer/footer";
import GetALlLinks from "./projects/getalllinks";
import AllGhosts from "./ghost/getallghosts";

export default function Kaizen() {
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

  return (
    <div className="flex flex-col space-y-5">
      {/* <CarouselComp /> */}

      <h1 className="text-5xl text-blue-500 font-bold">
        <span className="text-black dark:text-white italic">Hey</span> There! 👋🏼
      </h1>

      <span className="">Have a look at my hobie!</span>

      <span className="text-slate-500 dark:text-slate-300">
        Well, writing Content has become my hobbie ever since I joined College.
        I write blogs on Life, Coding, Experinences, Personal Growth and growing
        tech world. I am a good observer and I keep a tight eye on events around
        me and on Social Media and then try to take out some learning from it.
      </span>

      <span className="text-slate-500 dark:text-slate-300">
        Well this is the place where I keep writing and show and hone my writing
        skills. To actually meet the writer inside me, I pick up and a Pen & a
        Paper and then make the pen my sword as my keyboard is for me while
        coding😁.
      </span>

      <span className="text-slate-500 dark:text-slate-300">
        Well, I also try to give life to my writings by adding my voice and
        B-Rolls. I keep posting such content on my instagram cause I love doing
        this. And become someone who puts good message to this youth and inspire
        someone like me who feels like changing something for himself and world.
        You can view them{" "}
        <Link
          href={"https://instagram.com/whyankush07/"}
          className="text-sky-500"
        >
          here!
        </Link>
      </span>

      <div className="flex space-x-4 justify-start">
        <div>
          {user == "deshwalankush23@gmail.com" && (
            <Link href={"/addmyblog"}>
              <Button variant="primary">Add Blog</Button>
            </Link>
          )}
        </div>
      </div>

      {/* <AllBlogs /> */}
      <AllGhosts />


      <div className="h-fit pt-3 px-3 md:hidden">
        <GetALlLinks />
      </div>

      <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
        <Footer link="/about" text="Want to know more about me ?" />
        <Footer
          link="/freelance"
          text="Are you a client looking for project work?"
        />

        <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-white rounded-sm ">
          Want to connect with me via Mail?
          <span className="text-blue-500 flex space-x-2">
            <RiMailCheckFill />
            <Link href="https://mail.google.com/">
              ankushsingh.dev@gmail.com
            </Link>{" "}
          </span>
        </div>
      </div>
      <div className="pb-2 pt-3"></div>
    </div>
  );
}
