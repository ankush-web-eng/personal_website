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
        <div className="max-md:p-3 md:py-6 md:mx-3 grid grid-cols-1 md:grid-cols-2 md:space-x-4 space-y-3">
            {ghosts !== null && ghosts.map((ghost, index) => <Ghost key={index} params={ghost} />)}
        </div>
    )
}