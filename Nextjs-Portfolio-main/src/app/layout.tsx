import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import LoadingWrapper from "@/components/LoadingWrapper";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5355d6",
};

export const metadata: Metadata = {
  title: "Gautam Jha | Full Stack Developer",
  description:
    "Explore Gautam Jha's portfolio showcasing skills in React, Next.js, Node.js, and AI-powered full-stack web development. Discover projects, experience, and more.",
  keywords:
    "Gautam Jha, Full Stack Developer, web developer, React, Next.js, Node.js, Tailwind CSS, portfolio, MongoDB, Express.js, AI, Supabase, modern web design",
  authors: [
    {
      name: "Gautam Kumar Jha",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://gautam-jha.github.io",
  },
  icons: {
    icon: "/gautam.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="_t_voY5kuMVEL4CtmBOVDuZ0j6_MRBKwBxG5mDwkK90" />
      <body
        suppressHydrationWarning
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {/* <div className="fixed inset-0 z-[60] pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.6)_0%,transparent_20%,transparent_80%,rgba(0,0,0,0.6)_100%)]" /> */}
        <LoadingWrapper>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </LoadingWrapper>
      </body>
    </html>
  );
}
