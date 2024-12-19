import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Code Analysis Tool",
  description: "Analyze your code with AI-powered insights.",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
  openGraph: {
    title: "Code Analysis Tool",
    description: "Analyze your code with AI-powered insights.",
    url: "https://yourdomain.com",
    siteName: "Code Analysis Tool",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
        alt: "Code Analysis Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Analysis Tool",
    description: "Analyze your code with AI-powered insights.",
    images: ["/favicon.ico"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}