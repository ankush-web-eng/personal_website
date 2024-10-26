import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from "./provider";
import { Toaster } from '@/components/ui/toaster';
import OfflineNotification from '@/components/offline-navigator';
import CustomHead from '@/components/custom-head';
import { metadata as siteMetadata } from '@/config/metadata';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <CustomHead />
      </head>
      <body className={inter.className}>
        <Provider>
          <Toaster />
          {children}
          <OfflineNotification />
        </Provider>
      </body>
    </html>
  );
}