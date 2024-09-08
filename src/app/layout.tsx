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
  title: "Dio Next Blog",
  description: "Dio Next Blog para aa novidades do desenvolvimento web com o Next.JS",
  openGraph: {
    title: "Dio Next Blog"
  } 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="theme-compiled">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
      >
        {children}
      </body>
    </html>
  );
}
