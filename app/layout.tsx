import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/shared/providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comunify",
  description: "Chat & Comunicate with your friends from anywhere!",
  icons: { icon: "/comunify.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.className} h-full bg-background dark:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
