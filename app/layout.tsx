import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/config/theme-provider";
import SessionProvider from "@/config/SessionProvider";
import { getServerSession } from "next-auth";
import Provider from "./provider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ankush's World",
    template: "%s | Ankush's World",
  },
  description: "For Personal Branding",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="This is Ankush's professional space!"
        />
        <meta name="application-name" content="Ankush" />

        <meta property="og:title" content="Ankush" />
        <meta
          property="og:description"
          content="Welcome to Ankush's Professional Space!"
        />
        <meta property="og:image" content="/Ankush_pro.png" />
        <meta property="og:image:alt" content="Ankush" />

        <meta name="twitter:title" content="Ankush" />
        <meta
          name="twitter:description"
          content="Welcome to Ankush's Professional Space!"
        />
        <meta name="twitter:image" content="/anime.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Ankush__57s" />

        <link rel="icon" type="image/png" href="/Ankush_pro.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#33F9FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ankush"></meta>
      </head>

      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <Provider>
            <ToastContainer />
              {children}
            </Provider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
