"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import Ghost from "./ghost";
import Loading from "@/components/loading";
import TwoGhostsSkeleton from "@/components/skeleton/TwoGhostsSkeleton";

interface form {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    content: string[];
    type: string;
}

export default function AllGhosts() {

    const [ghosts, setGhosts] = useState<form[] | null>([]);
    const [loading, setLoading] = useState(true);

    const getGhosts = async () => {
        try {
            const res = await axios.get('/api/ghost/getallghosts');
            setLoading(false);
            setGhosts(res.data.data);
        } catch (error) {
        }
    }

    useEffect(() => {
        getGhosts()
    }, [])

    if (loading) {
        <TwoGhostsSkeleton />
    }

    return (
        <div className="rounded-xl text-black w-full h-auto md:grid grid-cols-1 md:grid-cols-2 max-md:space-y-4 ">
            {ghosts !== null ?
                ghosts.map((ghost, index) => <Ghost key={index} params={ghost} />) :
                <Loading >Loading Projects</Loading>}
        </div>
    )
}