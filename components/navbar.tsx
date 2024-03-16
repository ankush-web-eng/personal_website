"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModeToggle } from "./ui/mode-toggle";

export const Navbar = () => {

    // const router = useRouter()

    return (
        <ul className="hidden md:min-w-max md:flex justify-evenly items-center md:py-2 md:mx-2">
            <li className="italic font-semibold"><Link href="/blogs">About</Link></li>
            <li className="italic font-semibold"><Link href="/Contact">Contact</Link></li>
            <li className="italic font-semibold"><Link href="/services">Services</Link></li>
            <li><ModeToggle /></li>
        </ul>
    )
}