"use client";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React, { useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/config/firebase";
import { v4 } from "uuid";

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
      <div className="hidden md:flex">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
            <img src="/kaizen.png" alt="kaizen image" />
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
            <div className="flex justify-center text-3xl">Coming Soon</div>
            <div className="pb-6 pt-3"></div>
          </div>
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-2 pr-2 pt-8 w-full flex flex-col">
          <Header />
          <div className="flex flex-col space-y-5">
            <img src="/kaizen.png" alt="kaizen image" />
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
            <div className="flex justify-center text-3xl">Coming Soon</div>
            <div className="pb-6 pt-3"></div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
