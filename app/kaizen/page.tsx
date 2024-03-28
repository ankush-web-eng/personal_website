"use client";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React, { useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/config/firebase";
// import { v4 } from "uuid";
import Link from "next/link";
import { RiMailCheckFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";


export default function Kaizen() {
  // const [imageupload, setImageUpload] = React.useState(null);
  // const [getImage, setGetImage] = React.useState([]);

  // const getImageref = ref(storage, "images/");

  // const onSubmit = async () => {
  //   if (imageupload == null) return;
  //   const imageRef = ref(storage, `images/${imageupload.name + v4()}`);
  //   await uploadBytes(imageRef, imageupload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setGetImage((prev) => [...prev, url]);
  //     });
  //   });
  // };

  // const getFiles = async () => {
  //   await listAll(getImageref).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setGetImage((prevImages) => [...prevImages, url]);
  //       });
  //     });
  //   });
  // };
  // useEffect(() => {
  //   getFiles();
  // }, []);

  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
            <Image
              src="/kaizen.png"
              alt="kaizen image"
              height={320}
              width={640}
            />
            <h1 className="text-5xl text-blue-500 font-bold">
              <span className="text-black dark:text-white">Hey</span> Kaizenist
            </h1>
            <span className="">New to word Kaizen?</span>
            <span className="text-slate-500">
              <a className="text-blue-500">Kaizen</a> is a Japanese business
              philosophy of continuous improvement of working practices,
              personal efficiency, etc. <br />
              Well I am a firm believer in Kaizen and decided to create a
              section on my Personal Website. I also creates content on
              Instagram on Self-Growth and share my learnings on priciple of
              Kaizen. You can view my content on Instagram{" "}
              <a
                href="https://www.instagram.com/ankush__57s/"
                target="ankush"
                className="text-blue-500"
              >
                @ankush__57s.
              </a>
            </span>
            <h1 className="text-3xl text-blue-500 font-bold">
              Read my Blogs on kaizen
            </h1>
            <div className="flex justify-center text-sky-500 text-2xl"><a target="_ankush" href="https://kaizen-blogs.onrender.com">Visit my new Website for Blogs</a></div>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to know more about me ?
                <span className="text-blue-500">
                  <Link href="/about">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Are you a client looking for project work?
                <span className="text-blue-500">
                  <Link href="/freelance">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
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
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-2 pr-2 pt-8 w-full flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
          <Image
              src="/kaizen.png"
              alt="kaizen image"
              height={320}
              width={640}
            />
            <h1 className="text-5xl text-blue-500 font-bold">
              <span className="text-black dark:text-white">Hey</span> Kaizenist
            </h1>
            <span className="">New to word Kaizen?</span>
            <span className="text-slate-500">
              <a className="text-blue-500">Kaizen</a> is a Japanese business
              philosophy of continuous improvement of working practices,
              personal efficiency, etc. <br />
              Well I am a firm believer in Kaizen and decided to create a
              section on my Personal Website. I also creates content on
              Instagram on Self-Growth and share my learnings on priciple of
              Kaizen. You can view my content on Instagram{" "}
              <a
                href="https://www.instagram.com/ankush__57s/"
                target="ankush"
                className="text-blue-500"
              >
                @ankush__57s.
              </a>
            </span>
            <h1 className="text-3xl text-blue-500 font-bold">
              Read my Blogs on kaizen
            </h1>
            <div className="flex justify-center text-sky-500 text-2xl"><a target="_ankush" href="https://kaizen-blogs.onrender.com">Visit my new Website for Blogs</a></div>
            <div className="pt-8 pb-20 flex space-x-6 space-y-4 flex-wrap">
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to know more about me ?
                <span className="text-blue-500">
                  <Link href="/about">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Are you a client looking for project work?
                <span className="text-blue-500">
                  <Link href="/freelance">
                    Click here <FaArrowRight />
                  </Link>
                </span>
              </div>
              <div className="w-fit px-4 py-4 dark:text-slate-800  flex flex-col border-2 border-gray-300 bg-teal-100 rounded-sm origin-top-left rotate-3 hover:rotate-0">
                Want to connect with me via Mail?
                <span className="text-blue-500 flex space-x-2">
                  <RiMailCheckFill />
                  <Link href="https://mail.google.com/">
                    deshwalankush23@gmail.com
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="pb-3 pt-3"></div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
