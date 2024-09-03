"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@/components/loading";
import Skill from "../projects/skill";

interface Skill {
  _id: string;
  name: string;
  type: string;
  icon: string;
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[] | null>([]);

  const getSkills = async () => {
    try {
      const res = await axios.get("/api/skill/getskills");
      setSkills(res.data.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-sky-500 font-bold w-fit pt-3 pb-2">
        Skills
      </h1>
      <span className="text-slate-500 py-2 pb-4 dark:text-slate-300">
        I have an healthy obsession of learning. In development, you need to
        contantly learn new things to keep up with the rapid growing tech market
        in presence of AI. Started learning HTML in September 2023, I have come
        a long way and learnt various technologies, frameworks and Libraries.
        And now I am mastering Full Stack by adding Generative AI to my
        Projects.
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 max-md:space-y-3">
        <div className="bg-yellow-50 dark:bg-blue-950/20 flex flex-col w-5/6 md:w-max p-3 space-y-2 rounded-md shadow-md dark:shadow-blue-950 drop-shadow-md">
          <h1 className="text-2xl text-sky-500 pl-2 font-semibold">
            Technologies & <br /> Languages
          </h1>

          <ul className="space-y-3 pl-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Technology" && (
                    <Skill key={index} props={data} />
                  )
              )
            )}
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-blue-950/20 flex flex-col w-5/6 md:w-max p-3 space-y-2 rounded-md shadow-md dark:shadow-blue-950 drop-shadow-md">
          <h1 className="text-2xl text-sky-500 pl-2 font-semibold">
            Frameworks & <br /> Libraries
          </h1>

          <ul className="space-y-3 pl-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Framework" && (
                    <Skill key={index} props={data} />
                  )
              )
            )}
          </ul>
        </div>
        <div className="bg-yellow-50 dark:bg-blue-950/20 flex flex-col w-5/6 md:w-max p-3 space-y-2 rounded-md shadow-md dark:shadow-blue-950 drop-shadow-md">
          <h1 className="text-2xl text-sky-500 pl-2 font-semibold">
            Databases & <br />
            Others
          </h1>

          <ul className="space-y-3 pl-2 text-slate-500">
            {skills == null ? (
              <Loading>Loading</Loading>
            ) : (
              skills &&
              skills.map(
                (data, index) =>
                  data.type === "Database" && <Skill key={index} props={data} />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
