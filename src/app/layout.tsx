"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  MainLayoutFooter,
  MainLayoutHeader,
  MobileMainLayoutHeader,
} from "./component";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface metadataProps extends Metadata {
  title: string;
  description: string;
  url: string;
  image: string;
}

const metadata: metadataProps = {
  title: "Platform Crypto Eceran Terbaik",
  description:
    "Beli koin crypto eceran dengan mudah dan terjangkau di platform kami. Jumlah maksimal satu koin, hanya 20 ribu dengan fee transaksi 1 ribu.",
  url: "https://www.vercel.com",
  image: "https://twitter.com/stjerneskudd1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Name" />

        {/* Add more meta tags as needed */}
      </head>
      <body className={inter.className}>
        <div className="bg-white text-black min-h-screen grid grid-cols-12 transition duration-300 ease-in-out">
          <div
            className={`sm:col-span-12 hidden md:block ${
              isShow
                ? "lg:col-span-2 md:col-span-3"
                : "lg:col-span-1 md:col-span-1"
            } col-span-12 shadow-md`}
          >
            <header className="sticky top-0 left-0">
              {/* <!-- Header halaman, bisa berisi judul, logo, atau navigasi --> */}
              <MainLayoutHeader isShow={isShow} setIsShow={setIsShow} />
            </header>
          </div>
          <div
            className={`${
              isShow
                ? "lg:col-span-10 md:col-span-9"
                : "lg:col-span-11 md:col-span-11"
            } sm:col-span-12 col-span-12`}
          >
            <main className="text-center">{children}</main>
          </div>
        </div>

        <MobileMainLayoutHeader />

        <footer className="flex gap-4 w-full justify-between fixed bottom-0 left-0 w-full bg-white text-black p-4 border-t border-gray-300 z-50 block md:hidden">
          {/* <!-- Footer halaman, bisa berisi informasi kontak, hak cipta, atau tautan sosial media --> */}
          <MainLayoutFooter />
        </footer>
      </body>
    </html>
  );
}
