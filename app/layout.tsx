import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from "./provider";
import { Toaster } from '@/components/ui/toaster';
import OfflineNotification from '@/components/offline-navigator';
import { metadata as siteMetadata } from '@/config/metadata';
import NextTopLoader from 'nextjs-toploader';
import { CloudflareAnalyticsOne, CloudflareAnalyticsTwo } from '@/components/CloudflareAnalytics';
import { Toaster as SonnerToast } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Head>
        <CustomHead />
      </Head> */}
      <body className={inter.className}>
        <Provider>
          <CloudflareAnalyticsOne />
          <CloudflareAnalyticsTwo />
          <Toaster />
          <SonnerToast richColors position="top-right" />
          <NextTopLoader
            showSpinner={false}
          />
          {children}
          <OfflineNotification />
        </Provider>
      </body>
    </html>
  );
}