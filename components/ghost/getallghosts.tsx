import axios from "axios";
import { useEffect, useState } from "react"
import Ghost from "./ghost";

interface form {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    content: string[];
    type: string;
}

export default function AllGhosts() {

    const [ghosts, setGhosts] = useState<form [] | null>([])

    const getGhosts = async () => {
        try {
            const res = await axios.get('/api/ghost/getallghosts')
            setGhosts(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getGhosts()
    }, [])

    return (
        <div className="rounded-xl text-black w-full h-auto md:grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 ">
            {ghosts !== null && ghosts.map((ghost, index) => <Ghost key={index} params={ghost} />)}
        </div>
    )
}