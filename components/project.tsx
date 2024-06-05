// "use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  para1: string;
};

export default function Project({ project }: { project: Project }) {
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

  const [isdeleted, setIsDeleted] = useState<boolean>(false);

  const deleteProject = async (id: string) => {
    try {
      setIsDeleted(true);
      await axios
        .get(`/api/projects/deleteproject/${id}`)
        .then(() => alert("Project deleted successfully"))
        .catch((error) => console.log(error));
      setIsDeleted(false);
    } catch (error) {
      alert("Error deleting project");
      console.log(error);
    }
  };

  return (
    <Link href={`/freelance/projects/${project.id}`} className="flex shadow-md rounded-xl flex-col space-y-2 p-2 max-md:px-2 max-md:w-full border">
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <p className="text-slate-400 text-sm">
        {project.para1.substring(0, 150)}...
      </p>
      <div className="flex flex-row space-x-4">
        {user == "deshwalankush23@gmail.com" && (
          <Button onClick={() => deleteProject(project.id)} variant="primary">
            {isdeleted ? "Deleting" : "Delete"}
          </Button>
        )}
      </div>
    </Link>
  );
}
