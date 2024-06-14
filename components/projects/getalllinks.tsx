import axios from "axios";
import { useEffect, useState } from "react";
import ProjectLink from "./getlink";
import Loading from "../loading";

interface params {
  id: string;
  title: string;
  url: string;
  image: string;
}

export default function GetALlLinks() {
  const [data, setData] = useState<params[] | null>(null);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/projects/getlinks");
      setData(res.data.data);
      // console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  });

  return (
    <div className="bg-gray-200 rounded-xl fixed space-y-2 flex flex-col p-3">
      <h1 className="text-gray-500">Access all my Projects here:</h1>
      {data == null ? <Loading >Loading Links</Loading> :
        data.map((link, index) => <ProjectLink key={index} params={link} />)}
    </div>
  );
}
