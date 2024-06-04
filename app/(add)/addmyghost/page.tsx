"use client";

import AllGhosts from "@/components/ghost/getallghosts";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

interface form {
  id: String;
  title: String;
  subtitle: String;
  image: String;
  content: String[];
  type: String;
}

export default function Page() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState<File>();
  const [content, setContent] = useState<string[]>([]);
  const [type, setType] = useState("");
  const [number, setNumber] = useState(1);
  const [send, setSend] = useState(false);

  const router = useRouter();

  const giveContent = () => {
    let temp = [];
    for (let i = 0; i < number; i++) {
      temp.push(
        <div key={i} className="flex flex-col border-2 p-3 space-y-3">
          <label htmlFor="content" className="text-lg font-medium mb-2">
            Content {i + 1}
          </label>
          <input
            placeholder="Content"
            value={content[i]}
            onChange={(e) => {
              let temp = content;
              temp[i] = e.target.value;
              setContent(temp);
            }}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
            type="text"
          />
        </div>
      );
    }
    return temp;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSend(true);
    try {
      const formdata = new FormData();
      formdata.append("title", title);
      formdata.append("subtitle", subtitle);
      formdata.append("image", image as File);
      formdata.append("content", JSON.stringify(content));
      formdata.append("type", type);
      formdata.append("number", number.toString());

      const res = await axios.post("/api/ghost/addghost", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSend(false);
      setTitle("");
      setSubtitle("");
      setImage(undefined);
      setContent([]);
      setType("");
      setNumber(1);
    } catch (error) {
      alert("Error in Uploading Image");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white p-8 space-y-3 rounded-lg shadow-lg"
      >
        <label htmlFor="title" className="text-lg font-medium mb-2">
          Title
        </label>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          type="text"
        />

        <label htmlFor="subtitle" className="text-lg font-medium mb-2">
          Subtitle
        </label>
        <input
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          type="text"
        />

        <label htmlFor="type" className="text-lg font-medium mb-2">
          Type
        </label>
        <input
          placeholder="Programming / Growth / Life"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
          type="text"
        />

        <label htmlFor="image" className="text-lg font-medium mb-2">
          Image
        </label>
        <input
          type="file"
          id="image"
          className="w-full p-3 border border-gray-300 rounded-lg"
          onChange={(e) => setImage(e.target?.files?.[0])}
          required
        />

        <label className="block text-lg font-medium mb-2" htmlFor="number">
          Number of Content
        </label>
        <input
          type="number"
          id="number"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
          min={1}
          required
        />
        {giveContent()}

        <Button className="px-3 py-2" type="submit">
          {send ? (
            <span className="flex space-x-2">
              Submitting <TbLoader2 className="animate-spin" />
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}
