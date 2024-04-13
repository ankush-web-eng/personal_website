
// "use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

type Project = {
    id: string;
    title: string;
    description: string;
}

export default function Project({project}: {project: Project}){

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
    }, [])

    const [isdeleted,setIsDeleted] = useState<boolean>(false)

    const deleteProject = async (id:string) => {
        try {
            setIsDeleted(true)
            const response = await axios.get(`/api/projects/deleteproject/${id}`)
            if (response.status === 200) {
                alert("Project deleted successfully")
            }
            setIsDeleted(false)
        } catch (error) {
            alert("Error deleting project")
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col space-y-2 p-2 max-md:px-2 border-gray-400 border-2 rounded-md">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <p className="text-slate-400 text-sm">{project.description.substring(0,100)}...</p>
            <div className="flex flex-row space-x-4">
                <Link href={`/freelance/projects/${project.id}`} className="text-blue-500 italic">Read More...</Link>
                {user == "deshwalankush23@gmail.com" && <Button onClick={() => deleteProject(project.id)} variant="primary">{isdeleted ? "Deleting" : "Delete"}</Button>}
            </div>
        </div>
    )
}