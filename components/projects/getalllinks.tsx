import axios from "axios";
import { useEffect, useState } from "react";
import ProjectLink from "./getlink";

interface params {
  id: string;
  title: string;
  url: string;
  image: string;
}

export default function GetALlLinks() {
  const [data, setData] = useState<params[]>([]);

  const getLinks = async () => {
    try {
      const res = await axios.get("/api/projects/getlinks");
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLinks();
  });

  return (
    <div className="bg-yellow-100 rounded-md space-y-2 flex flex-col p-3">
      {data &&
        data.map((link, index) => <ProjectLink key={index} params={link} />)}
    </div>
  );
}
