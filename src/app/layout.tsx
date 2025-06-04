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
  title: "BraseltonTech",
  description: "BraseltonTech - Building the Next Tech Community",
  icons: {
    icon: [
      { url: '/images/braselton-tech-logo.jpg' }
    ],
    apple: [
      { url: '/images/braselton-tech-logo.jpg' }
    ],
  },
  openGraph: {
    title: 'BraseltonTech',
    description: 'BraseltonTech - Building the Next Tech Community',
    images: [
      {
        url: '/images/braselton-tech-logo.jpg',
        width: 800,
        height: 600,
        alt: 'BraseltonTech Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BraseltonTech',
    description: 'BraseltonTech - Building the Next Tech Community',
    images: ['/images/braselton-tech-logo.jpg'],
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
