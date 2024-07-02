import Link from "next/link";
import Image from "next/image";

import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";

export default async function Header() {

  const session =  await getServerSession()

  return (
    <div className="max-sm:w-screen flex justify-end space-x-4 items-center md:pr-6 pr-4 md:pt-4 md:space-x-4">
      <Button className="rounded-full" variant={'primary'}>
        <Link href="/messages">
          Guestbook
        </Link>
      </Button>
      <div className="relative cursor-pointer">
        <Image
        //  onClick={opendiv}
          width={32}
          height={32}
          alt={session?.user?.name || "User"}
          src={session?.user?.image || "/user.png"}
          className="rounded-full w-[32px] h-[32px]"
        />
        {/* {open && <div className="absolute top-8 z-50 right-2 rounded-xl">
          <Auth />
        </div>} */}
      </div>
      <ModeToggle />
    </div>
  );
};
