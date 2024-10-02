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
  title: "Ankush's World - Ankush's professional space!",
  description:
    "Ankush's professional space where you can find his professional profile, testimonials, blogs, and projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankushsingh.tech",
    title: "Ankush's World - Ankush's professional space!",
    description:
      "Ankush's professional space where you can find his professional profile, testimonials, blogs, and projects.",
    images: [
      {
        url: "https://ankushsingh.tech/Ankush.png",
        width: 1200,
        height: 627,
        alt: "Ankush's World",
      },
    ],
    siteName: "Ankush's World",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://ankushsingh.tech",
    creator: "@whyankush07",
    title: "Ankush's World - Ankush's professional space!",
    description:
      "Ankush's professional space where you can find his professional profile, testimonials, blogs, and projects.",
    images: [
      {
        url: "https://ankushsingh.tech/Ankush.png",
        width: 1200,
        height: 627,
        alt: "Ankush's World",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL("https://ankushsingh.tech"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession().catch(() => null);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="description"
          content="This is Ankush's professional space where you can explore his projects, testimonials, and blogs."
        />
        <meta name="application-name" content="Ankush's World" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Ankush's World - Ankush's professional space!" />
        <meta property="og:site_name" content="Ankush's World" />
        <meta
          property="og:description"
          content="Welcome to Ankush's professional space! Discover his profile, blogs, and more."
        />
        <meta property="og:url" content="https://ankushsingh.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ankushsingh.tech/Ankush.png" />
        <meta property="og:image:alt" content="Ankush's Professional Profile" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@whyankush07" />
        <meta name="twitter:title" content="Ankush's World - Ankush's professional space!" />
        <meta name="twitter:description" content="Ankush's professional space with blogs, testimonials, and projects." />
        <meta name="twitter:image" content="https://ankushsingh.tech/Ankush.png" />
        <meta name="twitter:image:alt" content="Ankush's World" />

        <meta name="linkedin:title" content="Ankush's World" />
        <meta name="linkedin:description" content="Explore Ankush's professional portfolio and projects." />
        <meta name="linkedin:image" content="https://ankushsingh.tech/Ankush.png" />

        <link rel="icon" type="image/png" href="https://ankushsingh.tech/Ankush.png" />
        <link rel="manifest" href="https://ankushsingh.tech/manifest.json" />
        <meta name="theme-color" content="#33F9FF" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-title" content="Ankush's World" />
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
