"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LazyIframe() {

    const [loaded, setLoaded] = useState(false)

    return (
        <>
            {loaded ?
                <div className="flex flex-col space-y-2">
                    <h1 className="text-center">Recorded in January 2024</h1>
                    <iframe
                        className="rounded-lg"
                        src="https://www.youtube.com/embed/UQ1loFxkfUE?si=CCzWqLXlv2YZhcze"
                        title="About Ankush"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div> :
                <Button variant={'secondary'} onClick={() => setLoaded(true)}>Watch my Intro</Button>}
        </>
    )
}