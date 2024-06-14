import { useSession } from "next-auth/react";
import { Auth } from "./auth";
import { ModeToggle } from "./ui/mode-toggle";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "./ui/button";

export const Header = () => {
  const [image, setImage] = useState<string>("/user.png");
  const [name, setName] = useState<string>("");
  const [open,setOpen] = useState(false)

  const getUserName = async () => {
    try {
      const data = await axios.get("/api/users/getuser");
      if (data.data.data === null) {
        setImage("/user.png");
      } else {
        setImage(data.data.data.image);
        setName(data.data.data.name);
        console.log(data.data.data.image);
        console.log(data.data.data);
        console.log(data.data.data.name);
      }
    } catch (error) {
      console.log("Server Side Error");
      alert("Server Side Error");
    }
  };

  const opendiv = () => {
    if (open) {
      setOpen(false)
    } else{
      setOpen(true)
    }
  }

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <div className="max-sm:w-screen flex justify-end space-x-4 items-center md:pr-6 pr-4 md:pt-4 md:space-x-4">
      <Button className="rounded-full" variant={'primary'}>
        <Link href="/messages">
          {/* <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={window.location.pathname === "/messages" ? "blue" : "gray"}
            fillOpacity={0.32}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13.4 18-3-7.4-7.4-3L19 2z"></path>
            <path d="M13.331 15.169 17.37 3.63 5.831 7.669l5.337 2.163 2.163 5.337Zm-3.699-3.801L.17 7.53 20.63.37l-7.161 20.461-3.837-9.463Z"></path>
          </svg> */}
          Guestbook
        </Link>
      </Button>
      <div className="relative cursor-pointer">
        <Image onClick={opendiv}
          width={32}
          height={32}
          alt={name}
          src={image}
          className="rounded-full w-[32px] h-[32px]"
        />
        {open && <div className="absolute top-8 z-50 right-2 rounded-xl">
          <Auth />
        </div>}
      </div>
      <ModeToggle />
    </div>
  );
};
