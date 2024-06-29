import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { RiMailCheckFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const AllGhosts = dynamic(() => import('@/components/ghost/getallghosts'), { ssr: false });


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

      <h1 className="text-5xl text-sky-500 font-bold">
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

      <AllGhosts />


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
