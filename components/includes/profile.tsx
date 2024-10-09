"use client";
import Image from "next/image";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Auth } from "@/components/auth";

export default function Profile() {

    const [open, setOpen] = useState<boolean>(false);
    const { data: session } = useSession();

    return (
        <div className="relative cursor-pointer">
            <Image
                onClick={() => setOpen(!open)}
                width={32}
                height={32}
                alt={session?.user?.name || "User"}
                src={session?.user?.image || "/user.png"}
                className="rounded-full w-[32px] h-[32px]"
            />
            {open && <div className="absolute top-8 z-50 right-2 rounded-xl">
                <Auth />
            </div>}
        </div>
    )
}