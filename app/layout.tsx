import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from "./provider";
import { Toaster } from '@/components/ui/toaster';
import OfflineNotification from '@/components/offline-navigator';
import CustomHead from '@/components/custom-head';
import { metadata as siteMetadata } from '@/config/metadata';
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <CustomHead />
      </Head>
      <body className={inter.className}>
        <Provider>
          <Toaster />
          <Analytics />
          {children}
          <OfflineNotification />
        </Provider>
      </body>
    </html>
  );
}