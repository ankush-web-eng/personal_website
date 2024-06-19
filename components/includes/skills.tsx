"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Loading from "@/components/loading";
import { TbLoader2 } from "react-icons/tb";

interface Skill {
  id: string;
  name: string;
  type: string;
  icon: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[] | null>([]);
  const { data: session } = useSession();
  const [send, setSend] = useState(false);

  const getSkills = async () => {
    try {
      const res = await axios.get("/api/skill/getskills");
      setSkills(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-blue-500 font-bold w-fit mt-6 mb-2">
        Skills
      </h1>
      <span className="text-slate-500 py-2 mb-4">
        I have an healthy obsession of learning. In development, you need to
        contantly learn new things to keep up with the rapid growing tech market
        in presence of AI. Started learning HTML in September 2023, I have come
        a long way and learnt various technologies, frameworks and Libraries.
        And now I am mastering Full Stack by adding Generative AI to my
        Projects.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 max-md:space-y-3">
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 mr-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Technologies & <br /> Languages
          </h1>

          <ul className="space-y-3 ml-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Technology" && (
                    <div key={index}>
                      <li className="flex items-center space-x-2">
                        <Image
                          src={data.icon}
                          alt={data.name}
                          height={20}
                          width={20}
                          className="rounded-full"
                        />
                        <p>{data.name}</p>
                        {session?.user?.email === "deshwalankush23@gmail.com" && <button onClick={() => deleteSkill(data.id)}>
                          {send ? (
                            <TbLoader2 className="animate-spin" />
                          ) : (
                            <MdDelete
                              className="cursor-pointer"
                              size={20}
                            />
                          )} </button>}
                      </li>
                    </div>
                  )
              )
            )}
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 ml-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Frameworks & <br /> Libraries
          </h1>

          <ul className="space-y-3 ml-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Framework" && (
                    <div key={index}>
                      <li className="flex items-center space-x-2">
                        <Image
                          src={data.icon}
                          alt={data.name}
                          height={20}
                          width={20}
                          className="rounded-full"
                        />
                        <p>{data.name}</p>
                        {session?.user?.email === "deshwalankush23@gmail.com" && <button onClick={() => deleteSkill(data.id)}>
                          {send ? (
                            <TbLoader2 className="animate-spin" />
                          ) : (
                            <MdDelete
                              className="cursor-pointer"
                              size={20}
                            />
                          )} </button>}
                      </li>
                    </div>
                  )
              )
            )}
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-teal-100 flex flex-col w-5/6 mr-0 md:w-max p-3 space-y-2 rounded-md border-2">
          <h1 className="text-2xl text-blue-500 ml-4 font-semibold">
            Databases & <br />
            Others
          </h1>

          <ul className="space-y-3 ml-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Database" && (
                    <div key={index}>
                      <li className="flex items-center space-x-2">
                        <Image
                          src={data.icon}
                          alt={data.name}
                          height={20}
                          width={20}
                          className="rounded-full"
                        />
                        <p>{data.name}</p>
                        {session?.user?.email === "deshwalankush23@gmail.com" && <button onClick={() => deleteSkill(data.id)}>
                          {send ? (
                            <TbLoader2 className="animate-spin" />
                          ) : (
                            <MdDelete
                              className="cursor-pointer"
                              size={20}
                            />
                          )} </button>}
                      </li>
                    </div>
                  )
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

{
  /* <ul className="space-y-3 ml-2 text-slate-500">
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>T-3 Stack</a>
</li>
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>MERN Stack</a>
</li>

<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>TypeScript</a>
</li>
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>JavaScript</a>
</li>
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>Python</a>
</li>
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>Golang</a>
</li>
<li className="flex items-center">
  <span className="text-sky-500 mr-2">—</span>
  <a>C</a>
</li>
</ul> */
}
