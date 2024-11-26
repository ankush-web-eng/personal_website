
'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { getServerSession } from "next-auth";
import { motion } from "framer-motion";

import { RiMailCheckFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import TwoGhostsSkeleton from "../skeleton/TwoGhostsSkeleton";
import { useSession } from "next-auth/react";

const AllGhosts = dynamic(() => import("@/components/ghost/getallghosts"), {
  ssr: false,
  loading: () => <TwoGhostsSkeleton />
})

export default function Kaizen() {
  const { data: session } = useSession();
  const user = session?.user;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col space-y-5"
    >
      <motion.h1
        variants={itemVariants}
        className="text-5xl text-sky-500 font-bold"
      >
        <span className="text-black dark:text-white italic">Hey</span> There! 👋🏼
      </motion.h1>

      <motion.span
        variants={itemVariants}
        className=""
      >
        Have a look at my hobie!
      </motion.span>

      <motion.span
        variants={itemVariants}
        className="text-slate-500 dark:text-slate-300"
      >
        Well, writing Content has become my hobbie ever since I joined College.
        I write blogs on Life, Coding, Experinences, Personal Growth and growing
        tech world. I am a good observer and I keep a tight eye on events around
        me and on Social Media and then try to take out some learning from it.
      </motion.span>

      <motion.span
        variants={itemVariants}
        className="text-slate-500 dark:text-slate-300"
      >
        Well this is the place where I keep writing and show and hone my writing
        skills. To actually meet the writer inside me, I pick up and a Pen & a
        Paper and then make the pen my sword as my keyboard is for me while
        coding😁.
      </motion.span>

      <motion.span
        variants={itemVariants}
        className="text-slate-500 dark:text-slate-300"
      >
        Well, I also try to give life to my writings by adding my voice and
        B-Rolls. I keep posting such content on my instagram cause I love doing
        this. And become someone who puts good message to this youth and inspire
        someone like me who feels like changing something for himself and world.
        You can view them{" "}
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={"https://instagram.com/whyankush07/"}
            className="text-sky-500"
          >
            here!
          </Link>
        </motion.span>
      </motion.span>

      <motion.div
        variants={itemVariants}
        className="flex space-x-4 justify-start"
      >
        <div>
          {user?.email == "deshwalankush23@gmail.com" && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={"/addmyghost"}>
                <Button variant="primary">Add Blog</Button>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <AllGhosts />
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="py-6 flex space-x-6 space-y-4 flex-wrap"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="w-fit px-4 py-4 dark:text-slate-300 text-slate-500 dark:bg-inherit flex flex-col shadow-md dark:shadow-blue-950 bg-white rounded-sm"
        >
          Want to connect with me via Mail?
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sky-400 flex space-x-2"
          >
            <RiMailCheckFill />
            <Link href="https://mail.google.com/">
              ankushsingh.dev@gmail.com
            </Link>{" "}
          </motion.span>
        </motion.div>
      </motion.div>
      <div className="py-3"></div>
    </motion.div>
  );
}