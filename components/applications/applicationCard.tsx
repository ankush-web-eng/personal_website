import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { Application } from "./applicationGrid";
import Link from "next/link";

const ApplicationCard = ({ application }: { application: Application }) => {
    return (
        <Link href={application.github} target="_blank" className="flex border rounded-xl flex-col space-y-2 p-2 max-md:px-2 max-md:w-full">
            <div className="p-2">
                <Image
                    className="w-10 h-10 rounded-full mb-4"
                    src={application.image}
                    alt={application.title + "icon"}
                    height={16}
                    width={16}
                    unoptimized />
                <div className="font-bold text-xl mb-2">{application.title}</div>
                <p className="text-neutral-500 dark:text-neutral-200 text-sm pb-4">{application.description.substring(0, 100)}...</p>
                <div className="flex justify-end">
                    <FaArrowRight className="text-blue-500" color="blue" size={20} />
                </div>
            </div>
        </Link>
    );
};

export default ApplicationCard;