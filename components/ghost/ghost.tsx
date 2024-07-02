import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { TbLoader2 } from "react-icons/tb";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";

interface form {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string[];
  type: string;
}

export default function Ghost({ params }: { params: form }) {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const [send, setSend] = useState(false);

  const deleteghost = async (id: any) => {
    setSend(true);
    try {
        const res = await axios.get(`/api/ghost/deleteghost/${id}`);
        setSend(false);
        alert("Deleted Successfully");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
      <Link  href={`/kaizen/blogs/${params.id}`}
        className="shadow-lg border items-center justify-center relative rounded-xl text-white w-full h-52 flex flex-col space-y-3 p-2"
        >
        <Image src={params.image} alt={params.title} width={500} height={230} style={{color: 'transparent'}} className="z-[-10] max-w-full max-h-full rounded-xl object-cover bg-repeat bg-over opacity-70 backdrop-filter backdrop-blur-2 absolute right-0 top-0" />
        <strong className="text-2xl font-bold drop-shadow-md">{params.title}</strong>
        {email == "deshwalankush23@gmail.com" && (
          <Button
            variant={"destructive"}
            onClick={() => deleteghost(params.id)}
          >
            {send ? (
              <span className="flex space-x-2">
                Deleting <TbLoader2 className="animate-spin" />{" "}
              </span>
            ) : (
              "Delete"
            )}
          </Button>
        )}
      </Link>
  );
}
