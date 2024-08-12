import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import SessionProvider from "@/context/SessionProvider";
import { getServerSession } from "next-auth";
import Provider from "./provider";
import { Toaster } from '@/components/ui/toaster';


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
        <meta name="description" content="This is Ankush's professional space!" />
        <meta name="application-name" content="Ankush's World" />

        <meta property="og:title" content="Ankush" />
        <meta property="og:site_name" content="Ankush's World" />
        <meta property="og:description" content="Welcome to Ankush's Professional Space!" />
        <meta property="og:url" content="https://ankushsingh.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://ankushsingh.tech/Ankush_pro.png" />
        <meta property="og:image:alt" content="Ankush's Professional Profile" />

        <meta name="twitter:title" content="Ankush" />
        <meta name="twitter:description" content="Welcome to Ankush's Professional Space!" />

        <meta name="twitter:image" content="https://ankushsingh.tech/Ankush_pro.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="whyankush07" />

        <meta name="linkedin:title" content="Ankush's World" />
        <meta name="linkedin:description" content="Welcome to Ankush's Professional Space!" />
        <meta name="linkedin:image" content="https://ankushsingh.tech/Ankush_pro.png" />

        <meta property="instapp:hashtags" content="#personalbranding #professionalprofile" />
        <meta property="instagram:author" content="@whyankush07" />

        <link rel="icon" type="image/png" href="https://ankushsingh.tech/Ankush_pro.png" />
        <link rel="manifest" href="https://ankushsingh.tech/manifest.json" />
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
              <Toaster />
              {children}
            </Provider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
