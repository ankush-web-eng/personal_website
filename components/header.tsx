import Link from "next/link";

import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import Profile from "@/components/includes/profile";

export default async function Header() {

  return (
    <div className="max-sm:w-screen flex justify-end space-x-4 items-center md:pr-6 pr-4 md:pt-4 md:space-x-4">
      <Link href="/messages">
        <Button className="rounded-full" variant={'primary'}>
          Guestbook
        </Button>
      </Link>
      <Profile />
      <ModeToggle />
    </div>
  );
};
