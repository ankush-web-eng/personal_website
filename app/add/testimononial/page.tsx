"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

export default function Page() {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [company, setCompany] = useState("");
    const [project, setProject] = useState("");
    const [send, setSend] = useState(false);

    const { toast } = useToast();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setSend(true);
            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("content", content);
            formdata.append("image", file as File);
            formdata.append("company", company);
            formdata.append("project", project);
            const response = await axios.post("/api/testimonial/add", formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast({
                title: "Success",
                description: response.data.message,
                duration: 2000
            })
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Error",
                    description: error.response?.data.message,
                    variant: "destructive",
                })
            }
            else {
                toast({
                    title: "Error",
                    description: "An error occurred",
                    variant: "destructive",
                })
            }
        } finally {
            setSend(false);
        }
    };

    return (
        <div className="h-screen flex px-6 justify-start">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 flex flex-col rounded-lg shadow-lg space-y-6"
            >
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        required
                        type="text"
                        id="name"
                        placeholder="Name of Client"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="content"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Content
                    </label>
                    <input
                        required
                        type="text"
                        id="content"
                        value={content}
                        placeholder="What did they say?"
                        onChange={(e) => setContent(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Image
                    </label>
                    <input
                        required
                        type="file"
                        id="file"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        value={company}
                        placeholder="Name of Company"
                        onChange={(e) => setCompany(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="project"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Project
                    </label>
                    <input
                        required
                        type="text"
                        id="project"
                        value={project}
                        placeholder="For what project?"
                        onChange={(e) => setProject(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <Button
                    type="submit"
                    variant={"default"}
                    className="w-full"
                //   className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    {send ? (
                        <span className="flex space-x-2 items-center">
                            Sending... <TbLoader2 className="animate-spin" />
                        </span>
                    ) : (
                        "Send"
                    )}
                </Button>
            </form>
        </div>
    );
}
