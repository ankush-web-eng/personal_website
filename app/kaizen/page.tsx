"use client";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import React, { useEffect } from "react";
import Kaizen from "@/components/kaizen";

export default function Page() {


  return (
    <div>
      <div className="hidden md:flex overflow-y-auto">
        <Navbar />
        <div className="h-screen space-y-6 pl-6 pt-8 w-1/2 flex flex-col">
          <Header />
          <Kaizen />
        </div>
      </div>
      <div className="flex md:hidden">
        <div className="h-screen space-y-6 pl-2 pr-2 pt-8 w-full flex flex-col">
          <Header />
          <Kaizen />
        </div>
        <Navbar />
      </div>
    </div>
  );
}
























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