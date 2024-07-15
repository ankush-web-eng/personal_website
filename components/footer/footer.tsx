

import GetALlLinks from "@/components/projects/getalllinks"
import Insta from "./insta";

export default function Footer() {
  return (
    <div className="w-full md:w-1/4 md:h-screen md:py-20 py-3 max-md:hidden">
      <div className="h-full w-full flex flex-col space-y-3 items-center">
        <GetALlLinks />
        <Insta />
      </div>
    </div>
  );
}
