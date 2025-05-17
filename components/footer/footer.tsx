import GetAllLinks from "@/components/projects/getalllinks"
import YouTube, { Insta, TestimonialLink } from "./insta";
import FreelanceProjectsLink from "@/components/freelance/freelanceProjects";

export default function Footer() {
  return (
    <div className="w-full md:w-1/4 md:h-screen md:py-20 py-3 max-md:hidden">
      <div className="h-full w-full flex flex-col space-y-4 items-center">
        {/* Social cards container with consistent spacing */}
        <div className="w-full flex flex-col space-y-3">
          <GetAllLinks />
          <YouTube />
          <Insta />
          <FreelanceProjectsLink />
          <TestimonialLink />
        </div>
      </div>
    </div>
  );
}