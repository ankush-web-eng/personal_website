import { useEffect, useState } from "react"; // Added useEffect
import axios from "axios";
import Blog from "@/components/blog/blog";
import Loading from "../loading";

interface BlogData {
  id: string;
  title: string;
  subtitle: string;
  para1: string;
}

export default function AllBlogs() {
  const [blogData, setBlogData] = useState<BlogData[] | null>(null);

  const getBlogData = async () => {
    try {
      const response = await axios.get("/api/blogs/getblogs");
      setBlogData(response.data.data);

    } catch (error) {
    }
  };

  useEffect(() => {
    getBlogData();
  }, []); // Added useEffect to call getBlogData when the component mounts

  return (
    <div className="pt-4 pb-8 flex space-y-6 flex-col border-b-sky-200">
      <h1 className="text-4xl text-sky-500 w-fit font-bold my-6">Blogs</h1>
      {blogData !== null ? (
        blogData.map((data, index) => (
            <Blog key={index} blog={data} />
        ))
      ) : (
        <Loading>Loading Blogs</Loading>
      )}
    </div>
  );
}