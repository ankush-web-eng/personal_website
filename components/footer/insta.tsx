import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface SocialCardProps {
  title: string;
  username: string;
  platform: string;
  href: string;
}

const SocialCard = ({ title, username, platform, href }: SocialCardProps) => {
  return (
    <div className="transition-all duration-300 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md bg-white dark:bg-gray-900 w-full max-w-xs">
      <div className="flex flex-col space-y-3">
        <span className="text-sm text-gray-500 dark:text-gray-400">{title}</span>
        <Link 
          target="_blank" 
          href={href}
          className="group flex items-center justify-between text-sm font-medium"
        >
          <span className="text-gray-800 dark:text-gray-200">
            {username}
          </span>
          <FaArrowRight 
            className="text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all" 
            size={14}
          />
        </Link>
      </div>
    </div>
  );
};

export default function YouTube() {
  return (
    <SocialCard
      title="YouTube Channel"
      username="@whyankush07"
      href="https://youtube.com/whyankush07/"
      platform="YouTube"
    />
  );
}

export function Insta() {
  return (
    <SocialCard
      title="Instagram Profile"
      username="@howankush07"
      href="https://instagram.com/howankush07/"
      platform="Instagram"
    />
  );
}

export const TestimonialLink = () => {
  return (
    <SocialCard
      title="Client Reviews"
      username="Testimonials"
      href="/freelance"
      platform="Testimonials"
    />
  );
}