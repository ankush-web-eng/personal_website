"use client"

import { Navbar } from "./navbar";
import { Header } from "./header";
import PageWrapper from "@/app/page-wrapper";

export default function Layout({ children }: {children: React.ReactNode}) {
    return (
        <PageWrapper >
        <div className="flex overflow-y-auto">
            <Navbar />
            <div className="flex h-screen w-full md:w-1/2 space-y-6 flex-col px-2 pt-8 md:pl-6">
                <Header />
                {children}
            </div>
        </div>
        </PageWrapper>
    )
}