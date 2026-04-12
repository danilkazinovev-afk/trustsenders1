import type { Metadata } from "next";
import { Karla, Space_Mono, Geologica } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const geologica = Geologica({
  subsets: ["latin"],
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  title: "Trust Senders — We Deliver. You Grow.",
  description:
    "Your emails shouldn't land in spam. Trust Senders fixes deliverability, builds private infrastructure, and keeps your sending stable — so you can scale with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${spaceMono.variable} ${geologica.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
