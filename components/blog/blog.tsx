"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type BlogProps = {
  id: string;
  title: string;
  subtitle: string;
  para1: string;
};

export default function Blog({ blog }: { blog: BlogProps }) {
  const [user, setUser] = useState<string>("null");
  const [isdeleted, setIsDeleted] = useState<boolean>(false);

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

  const deleteProject = async (id: string) => {
    try {
      setIsDeleted(true);
      await axios
        .get(`/api/blogs/deleteblog/${id}`)
        .then(() => alert("Blog deleted successfully"))
        .then(() => window.location.reload())
        .catch((e) => console.log(e));
      setIsDeleted(false);
    } catch (error) {
      alert("Error deleting Blog");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-2 w-5/6 border-2 rounded-lg">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <h1 className="text-2xl font-bold text-gray-700">{blog.subtitle}</h1>
      <p className="text-md font-normal text-gray-500">
        {blog.para1.substring(0, 250)}...
      </p>
      <Link href={`/kaizen/blogs/${blog.id}`} className="text-blue-500">
        Read more...
      </Link>
      {user == "deshwalankush23@gmail.com" && (
        <Button
          onClick={() => deleteProject(blog.id)}
          variant="primary"
          className="w-fit mt-4"
        >
          {isdeleted ? "Deleting" : "Delete"}
        </Button>
      )}
    </div>
  );
}
