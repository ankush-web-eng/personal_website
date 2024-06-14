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
        <span className="text-black dark:text-white">Hey</span> Kaizenist
      </h1>

      <span className="">New to word Kaizen?</span>
      <span className="text-slate-500">
        <a className="text-blue-500">Kaizen</a> is a Japanese business
        philosophy of continuous improvement of working practices, personal
        efficiency, etc. <br />
        Well, I keep writing Blogs and have a seperate website for blogs, but
        still decided a keep all my blogs on my personal website also. I also
        creates content on Instagram on Self-Growth and share my learnings on
        priciple of Kaizen. You can view my content on Instagram{" "}
        <a
          href="https://www.instagram.com/whyankush07/"
          target="ankush"
          className="text-blue-500"
        >
          @whyankush07.
        </a>
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


      <div className="flex justify-center text-sky-500 text-1xl">
        <a target="_ankush" href="https://kaizen-blogs.onrender.com">
          kaizen-blogs.onrender.com
        </a>
      </div>

      <div className="h-fit pt-3 px-3 md:hidden"><GetALlLinks /></div>


      <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">


        <Footer link="/about" text="Want to know more about me ?" />
        <Footer link="/freelance" text="Are you a client looking for project work?" />


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
      <div className="pb-2 pt-3"></div>
    </div>
  );
}
