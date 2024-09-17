import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "iDevops",
  description: "Devops tools enhanced by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      data-palette="trust"
      data-shade="900"
      data-rounded="large"
      suppressHydrationWarning={true}
      >
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-gray-925`}
      >
        {children}
      </body>
    </html>
  );
}
