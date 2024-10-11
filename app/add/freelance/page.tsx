"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

export default function Page() {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [shopify, setShopify] = useState(false);
    const [send, setSend] = useState(false);

    const { toast } = useToast();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!file) {
            toast({
                title: "Error",
                description: "Please select an icon file",
                variant: "destructive",
            });
            return;
        }

        try {
            setSend(true);

            const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("link", link);
            formdata.append("icon", file);
            formdata.append("shopify", shopify ? "true" : "false");

            const response = await axios.post("/api/freelance/add", formdata, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast({
                title: "Success",
                description: response.data.message,
                duration: 2000,
            });

        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast({
                    title: "Error",
                    description: error.response?.data.message,
                    variant: "destructive",
                });
            } else {
                toast({
                    title: "Error",
                    description: "An unexpected error occurred",
                    variant: "destructive",
                });
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
                        placeholder="Name of Project"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="link"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Link
                    </label>
                    <input
                        required
                        type="text"
                        id="link"
                        value={link}
                        placeholder="Link of the project"
                        onChange={(e) => setLink(e.target.value)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="file"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Icon
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
                        htmlFor="shopify"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Shopify ?
                    </label>
                    <input
                        type="checkbox"
                        id="shopify"
                        onChange={() => setShopify(!shopify)}
                        className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <Button
                    type="submit"
                    variant={"default"}
                    className="w-full"
                    disabled={send} // Disable button while sending
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
