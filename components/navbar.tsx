"use client"
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ui/mode-toggle";

import { RiHome4Line } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BsMenuUp } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { RiSendPlaneLine } from "react-icons/ri";

export const Navbar = () => {

    return (

        <ul className="flex justify-evenly md:justify-center items-end fixed md:sticky md:top-0 bottom-0 md:flex-col py-3 md:space-y-10 md:h-screen md:w-1/5 max-sm:space-x-7 w-full border-r dark:border-slate-800 z-50 backdrop-filter backdrop-blur-lg">
            <li className="italic font-semibold md:mr-8"><Link href="/"><RiHome4Line size={26} /></Link></li>
            <li className="italic font-semibold md:mr-8"><Link href="/about"><IoMdInformationCircleOutline size={26} /></Link></li>
            <li className="italic font-semibold md:mr-8"><Link href="/kaizen"><BsMenuUp size={26} /></Link></li>
            <li className="italic font-semibold md:mr-8"><Link href="/freelance"><SiFreelancer size={26} /></Link></li>
            <li className="italic font-semibold md:mr-8"><Link href="/messages"><RiSendPlaneLine size={26} /></Link></li>
            {/* <li className="md:mr-8"><ModeToggle /></li> */}
        </ul>

    )
}

//