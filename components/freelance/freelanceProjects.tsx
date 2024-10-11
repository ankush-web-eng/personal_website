'use client';
import axios, { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbLoader2, TbTimeDuration0 } from "react-icons/tb";
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
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  if (loading) {
    return <ProjectLinksSkeleton />
  }

  return (
    <div className="bg-gray-50 shadow-md drop-shadow-md dark:shadow-blue-950 dark:bg-blue-950/20 rounded-xl space-y-2 flex flex-col p-3">
      <h1 className="text-neutral-600 dark:text-gray-100 font-semibold">Freelace gigs:</h1>
      {data == null ? <Loading >Loading Links</Loading> :
        data.map((link, index) => <ProjectLink key={index} params={link} />)}
    </div>
  );
}

const ProjectLink = ({ params }: { params: FreelanceProjects }) => {
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
      })
    } finally {
      setSend(false);
    }
  };

  return (
    <div className="text-sky-500 space-x-3 flex items-center dark:text-gray-200">
      <Image
        src={params?.icon || ""}
        alt={params?.name}
        width={25}
        height={25}
        fetchPriority="high"
      />
      <Link href={params?.link || "/"} target={params.link !== "" ? "_blank" : "_parent"} >{params?.name}</Link>
      {email === "deshwalankush23@gmail.com" && <button onClick={() => deleteLink(params?._id)}>
        {send ? (
          <TbLoader2 className="animate-spin" />
        ) : (
          <MdDelete className="hover:bg-slate-500 rounded-md" />
        )}
      </button>}
    </div>
  );
}
