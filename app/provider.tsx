

import Header from "@/components/header";
import { Navbar } from "@/components/navbar";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="flex overflow-y-auto">
                <Navbar />
                <div className="flex h-screen w-full md:w-1/2 space-y-6 flex-col px-2 pt-8 md:pl-6">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    );
}