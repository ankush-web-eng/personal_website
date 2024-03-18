"use client"

import { Sociallinks } from "@/components/social"
import { Header } from "@/components/header"

export const Homepage = () => {
    return (
        <div className="md:ml-4">
            <div className="flex flex-col space-y-4 ">
                <Header />
                <img src="./ankush_cover.png"
                    className="md:w-[900px] md:h-[200px] rounded-2xl w-5/6 h-[100px]"
                    alt="Ankush Singh"
                    fetchPriority="high"
                />
                <div className="flex justify-start text-start"><h1 className="font-semibold text-lg">Hi, I'm <span className="text-blue-400">Ankush</span></h1></div>
                <h1 className="text-5xl font-bold ">I make <span className="text-green-500">Full Stack</span> Web Applications</h1>
                <p className="text-gray-600 dark:text-gray-400"> Student, Writer, Content Creator, Developer, tech enthusiast with passion for <span className="text-blue-500">Code.</span></p>

                <div className="flex pt-4 md:pt-8"><Sociallinks /></div>
            </div>
        </div>
    )
}