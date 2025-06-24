import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header/header";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Spiritual Growth App",
  description: "Your personalized spiritual growth journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.className} font-lora mx-auto max-w-[390px] rounded-lg bg-white antialiased shadow-xl`}
      >
        <Header />
        <main className="flex min-h-[calc(100dvh-76px)] flex-col p-6">{children}</main>
      </body>
    </html>
  );
}
