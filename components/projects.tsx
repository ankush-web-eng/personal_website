"use client";

import {
  SiMongodb,
  SiSocketdotio,
  SiTailwindcss,
  SiSelenium,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { MdInsertLink } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-blue-500 font-bold w-fit my-6">Projects</h1>
      <span className="py-2 text-slate-500">
        As a Developer, I have always tried to stretch my limits by testing my
        skills and learnig something new, cause this field has infinite
        possibilities of Developing nice and cool stuff.
      </span>
      <div className="flex flex-col">
        <div className="flex border-t space-x-4 items-center">
          <Image
            src="/chat.png"
            alt="chat-app"
            className="h-10 w-10 mr-4 rounded-2xl"
            height={25}
            width={25}
          />
          <div className="my-4">
            A Project developed with{" "}
            <span className="text-blue-500">NEXTJS</span>,{" "}
            <span className="text-blue-500">MONGODB</span> and{" "}
            <span className="text-blue-500">WEB-SOCKETS</span>. It&quot;s Primary
            Objective was to learn about Web-Sockets i.e.{" "}
            <span className="text-blue-500">Socket.io</span>. Since I was in my
            learning phase of NEXTJS, I also used{" "}
            <span className="text-blue-500">NextAuth</span> in this. This
            projects was majorly focused on sending data to database and then
            fetching it to render it on Client Side. I also included a section
            in it were users can write their blogs also and let all the other
            users read it.
            <br />
            <span className="flex space-x-4">
              <TbBrandNextjs size={26} />
              <SiSocketdotio color="blue" size={26} />
              <SiMongodb color="green" size={26} />
              <SiTailwindcss color="teal" size={26} />
            </span>
            <span className="my-2 flex text-blue-500">
              <Link
                href="https://github.com/ankush-web-eng/chat-app"
                className="flex"
              >
                View on Github
                <MdInsertLink size={26} color="blue" />
              </Link>
            </span>
          </div>
        </div>{" "}
        <div className="flex border-t space-x-4 items-center">
          <Image
            src="/bot.png"
            alt="bot icon"
            className="h-10 w-10 mr-4 rounded-2xl"
            height={25}
            width={25}
          />
          <div className="my-4">
            <span className="text-blue-500">Python</span> is becoming my new{" "}
            <span className="text-red-600 font-bold italic">Love</span>. I have
            learnt Python in advance way and made a few{" "}
            <span className="text-blue-500">BOTS</span> for me. I made{" "}
            <span className="text-blue-500">LinkedIn Bot </span>
            for sending Job Applications,{" "}
            <span className="text-blue-500">Instagram BOT</span> for following
            people of same community,{" "}
            <span className="text-blue-500">Twitter Bot</span> for measuring
            Internet Speed via
            <span className="text-blue-500"> OOKLA</span> and then tweeting
            about it on Twitter and{" "}
            <span className="text-blue-500">Tinder Bot</span> for Swiping right.{" "}
            For this, I have learnt{" "}
            <span className="text-blue-500">Web-Scrapping</span> with{" "}
            <span className="text-blue-500">Beautiful Soup</span> and{" "}
            <span className="text-blue-500">SELENIUM</span>. <br />
            <span className="flex space-x-4">
              <FaPython size={26} color="purple" />
              <SiSelenium size={26} color="green" />
            </span>
            <span className="my-2 flex text-blue-500">
              <Link
                href="https://github.com/ankush-web-eng/Python-Projects/tree/master/intermediate%2B%2B"
                className="flex"
              >
                View on Github
                <MdInsertLink size={26} color="blue" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
