'use client';
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbLoader2 } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import { useToast } from "../ui/use-toast";
import { ApiResponse } from "@/types/ApiResponse";
import ProjectLinksSkeleton from "@/components/skeleton/ProjectLinkSkeleton";
import Loading from "@/components/loading";

interface FreelanceProjects {
  _id: string;
  name: string;
  link?: string;
  icon?: string;
  shopify?: boolean;
}

export default function FreelanceProjectsLink() {
  const [data, setData] = useState<FreelanceProjects[] | null>(null);
  const [loading, setLoading] = useState(true);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/freelance/get");
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  if (loading) {
    return <ProjectLinksSkeleton />;
  }

  return (
    <div className="transition-all duration-300 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md bg-white dark:bg-gray-900 w-full max-w-xs">
      <div className="flex flex-col space-y-3">
        <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          Freelance Projects
        </h3>
        
        {data === null ? (
          <Loading>Loading Projects</Loading>
        ) : (
          <div className="flex flex-col space-y-2">
            {data.map((link, index) => (
              <FreelanceProjectLink key={index} params={link} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const FreelanceProjectLink = ({ params }: { params: FreelanceProjects }) => {
  const [send, setSend] = useState(false);
  const { data: session } = useSession();
  const email = session?.user?.email;
  const { toast } = useToast();

  const deleteLink = async (id: string) => {
    try {
      setSend(true);
      const res = await axios.get(`/api/freelance/delete/${id}`);
      toast({
        title: "Deleted Successfully",
        description: res?.data.message,
        duration: 2000
      });
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: "Error",
        variant: 'destructive',
        duration: 2000,
        description: axiosError?.response?.data.message
      });
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <Link 
        href={params?.link || "/"} 
        target={params.link !== "" ? "_blank" : "_parent"} 
        className="group flex items-center text-sm font-medium"
      >
        {params?.icon && (
          <Image
            src={params.icon}
            alt={params.name}
            width={18}
            height={18}
            className="mr-2 rounded-sm"
            fetchPriority="high"
          />
        )}
        <span className="text-gray-800 dark:text-gray-200 group-hover:text-sky-500 transition-colors">
          {params.name}
        </span>
        <FaArrowRight 
          className="ml-2 text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all" 
          size={12}
        />
      </Link>
      
      {email === "deshwalankush23@gmail.com" && (
        <button 
          onClick={() => deleteLink(params?._id)}
          className="p-1 rounded-md text-gray-400 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Delete project"
        >
          {send ? (
            <TbLoader2 className="animate-spin" size={16} />
          ) : (
            <MdDelete size={16} />
          )}
        </button>
      )}
    </div>
  );
}