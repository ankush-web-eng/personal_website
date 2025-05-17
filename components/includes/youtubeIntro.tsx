"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LazyIframe() {

    const [loaded, setLoaded] = useState(false)

    return (
        <>
            {loaded ?
                <div className="flex flex-col space-y-2">
                    <h1 className="text-center">November 2024</h1>
                    <iframe
                        className="rounded-lg"
                        src="https://www.youtube.com/embed/OKYOCbUT2Fs?si=6FAGnWrhVVHBCWN3"
                        title="Brolang - a fun programming language"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                </div> :
                <Button variant={'primary'} onClick={() => setLoaded(true)}>Video Presentation</Button>}
        </>
    )
}