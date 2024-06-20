import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";

import { MdDelete } from "react-icons/md";
import { TbLoader2 } from "react-icons/tb";

interface Skill {
  _id: string;
  name: string;
  type: string;
  icon: string;
}

export default function Skill({ props }: { props: Skill }) {
  const [send, setSend] = useState(false);
  const { data: session } = useSession();

  const deleteSkill = async (id: string) => {
    setSend(true);
    
    try {
      const res = await axios.get(`api/skill/deleteskill/${id}`);
      setSend(false);
    } catch (error) {
      console.log(error);
      setSend(false);
    }
  };

  return (
    <li className="flex items-center space-x-2">
      <Image
        src={props.icon}
        alt={props.name}
        height={20}
        width={20}
        className="rounded-full"
      />
      <p>{props.name}</p>
      {session?.user?.email === "deshwalankush23@gmail.com" && (
        <button onClick={() => deleteSkill(props._id)}>
          {send ? (
            <TbLoader2 className="animate-spin" />
          ) : (
            <MdDelete className="cursor-pointer" size={20} />
          )}{" "}
        </button>
      )}
    </li>
  );
}
