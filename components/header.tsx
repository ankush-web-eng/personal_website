
import { useSession } from "next-auth/react"
import { Auth } from "./auth"
import { ModeToggle } from "./ui/mode-toggle"
import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"

export const Header = () => {

    const [image, setImage] = useState<string>("/user.png");
    const [name, setName] = useState<string>("");

    const getUserName = async () => {
        try {
          const data = await axios.get("/api/users/getuser");
          if (data.data.data === null) {
            setImage("/user.png");
          } else {
            setImage(data.data.data.image);
            setName(data.data.data.name)
            console.log(data.data.data.image);
            console.log(data.data.data);
            console.log(data.data.data.name);
          }
        } catch (error) {
          console.log("Server Side Error");
          alert("Server Side Error");
        }
      };
    
      useEffect(() => {
        // getUserName()
      }, [])

    return(
        <div className="max-sm:w-screen flex justify-end space-x-4 items-center md:mr-6 md:mt-4 md:space-x-4">
                <Image width={32} height={32} alt={name} src={image} className="rounded-full w-[32px] h-[32px]" />
                <ModeToggle />
            </div>
    )
}