import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { Application } from "./applicationGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types/ApiResponse";

const ApplicationCard = ({ application }: { application: Application }) => {

    const { data: session } = useSession();
    const email = session?.user?.email;
    const { toast } = useToast();

    const [send, setSend] = useState<boolean>(false);

    const deleteghost = async (id: any) => {
        setSend(true);
        try {
            const res = await axios.get(`/api/application/delete/${id}`);
            toast({
                title: res?.data.message || "Deleted Successfully",
                duration: 2000
            })
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            const errorMessage = axiosError?.response?.data.message;
            toast({
                title: "Error in deleting",
                description: errorMessage,
                variant: 'destructive',
                duration: 2000
            })
        } finally {
            setSend(false);
        }
    };

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
                {email == "deshwalankush23@gmail.com" && (
                    <Button
                        variant={"destructive"}
                        onClick={() => deleteghost(application.id)}
                    >
                        {send ? (
                            <span className="flex space-x-2">
                                Deleting <TbLoader2 className="animate-spin" />{" "}
                            </span>
                        ) : (
                            "Delete"
                        )}
                    </Button>
                )}
            </div>
        </Link>
    );
};

export default ApplicationCard;