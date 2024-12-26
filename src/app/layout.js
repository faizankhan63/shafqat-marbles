import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from '../components/JsonLd';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shafqat Marble & Granite",
  description: "Premium marble and granite supplier in [Location]. We offer high-quality natural stone products, custom fabrication, and installation services.",
  metadataBase: new URL('https://shafqat-marbles-shop.vercel.app/'),
  openGraph: {
    title: 'Shafqat Marble & Granite',
    description: 'Premium marble and granite supplier in [Location]. We offer high-quality natural stone products, custom fabrication, and installation services.',
    url: 'https://shafqat-marbles-shop.vercel.app/',
    siteName: 'Shafqat Marble & Granite',
    images: [
      {
        url: 'https://shafqat-marbles-shop.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
