import { useEffect, useState } from "react"; // Added useEffect
import axios from "axios";
import Blog from "@/components/blog/blog";
import Loading from "../loading";
import Link from "next/link";

interface BlogData {
  id: string;
  title: string;
  subtitle: string;
  para1: string;
}

export default function SingleBlogs() {
  const [blogData, setBlogData] = useState<BlogData[] | null>(null);

  const getBlogData = async () => {
    try {
      const response = await axios.get("/api/blogs/getblogs");
      setBlogData(response.data.data.slice(0,2));

    } catch (error) {
    }
  };

  useEffect(() => {
    getBlogData();
  }, []); 

  return (
    <div className="pt-4 pb-6 flex space-y-2 flex-col border-b-sky-200">
      <h1 className="text-4xl text-sky-500 w-fit font-bold my-6">Blogs</h1>
      {blogData !== null ? (
        blogData.map((data, index) => (
            <Blog key={index} blog={data} />
        ))
      ) : (
        <Loading>Loading Blogs</Loading>
      )}
      <h2 className="text-sky-500"><Link href="/kaizen">Read More on Blogs Section</Link></h2>
    </div>
  );
}