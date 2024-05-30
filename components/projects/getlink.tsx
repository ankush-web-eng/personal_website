import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbLoader2 } from "react-icons/tb";

interface LinkProps {
  params: {
    id: string;
    title: string;
    url: string;
    image: string;
  };
}

export default function ProjectLink({ params }: LinkProps) {
  const [send, setSend] = useState(false);

  const {data:session} = useSession()
  const email = session?.user?.email

  const deleteLink = async (id: string) => {
    try {
      setSend(true);
      const res = await axios.post("/api/projects/deletelink", { id });
      if (res.status === 201) {
        alert("Link deleted successfully");
        setSend(false);
      }
    } catch (error) {
      alert("Unable to delete");
      console.log(error);
      setSend(false);
    }
  };

  return (
    <div  className="text-sky-500 space-x-3 flex items-center">
      <Image
        src={params.image}
        alt={params.title}
        width={25}
        height={25}
        fetchPriority="high"
      />
      <Link href={params.url} target="_ankush" >{params.title}</Link>
      {email === "deshwalankush23@gmail.com" && <button onClick={() => deleteLink(params.id)}>
        {send ? (
          <TbLoader2 className="animate-spin" />
        ) : (
          <MdDelete className="hover:bg-slate-500 rounded-md" />
        )}
      </button>}
    </div>
  );
}
