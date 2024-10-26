
import Footer from "@/components/footer/footer";
import Header from "@/components/header";
import { Navbar } from "@/components/navbar";
import { getServerSession } from "next-auth";
import { ThemeProvider } from "@/context/theme-provider";
import SessionProvider from "@/context/SessionProvider";

export default async function Provider({ children }: { children: React.ReactNode }) {
    const session = await getServerSession().catch(() => null);
    return (
        <SessionProvider session={session}>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                disableTransitionOnChange
            >
                <div className="flex max-md:flex-col overflow-y-auto overflow-x-hidden">
                    <Navbar />
                    <div className="flex h-screen w-full md:w-[62%] space-y-6 flex-col px-2 pt-8 md:pl-6">
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </div>
            </ThemeProvider>
        </SessionProvider >
    );
}