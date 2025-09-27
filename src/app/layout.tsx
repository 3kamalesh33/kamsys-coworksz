import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "KamSys CoWorksz - Premium Coworking Spaces",
    template: "%s | KamSys CoWorksz"
  },
  description: "Premium coworking spaces designed for productivity and collaboration. Find the perfect workspace for your business needs.",
  keywords: ["coworking", "workspace", "office space", "business", "productivity", "collaboration"],
  authors: [{ name: "KamSys CoWorksz" }],
  creator: "KamSys CoWorksz",
  metadataBase: new URL("https://kamsys-coworksz.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kamsys-coworksz.vercel.app",
    title: "KamSys CoWorksz - Premium Coworking Spaces",
    description: "Premium coworking spaces designed for productivity and collaboration. Find the perfect workspace for your business needs.",
    siteName: "KamSys CoWorksz",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "KamSys CoWorksz - Premium Coworking Spaces",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KamSys CoWorksz - Premium Coworking Spaces",
    description: "Premium coworking spaces designed for productivity and collaboration.",
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
