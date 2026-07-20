import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const description =
  "James Luke is a Senior Software Engineer specializing in distributed systems, cloud infrastructure, cybersecurity platforms, and AI engineering.";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "James Luke | Senior Software Engineer",
    template: "%s | James Luke",
  },
  description,
  keywords: [
    "Senior Software Engineer",
    "Distributed Systems",
    "Security Engineering",
    "Cloud Infrastructure",
    "AI Engineering",
  ],
  authors: [{ name: "James Luke" }],
  creator: "James Luke",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "James Luke | Senior Software Engineer",
    description,
    siteName: "James Luke",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "James Luke — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Luke | Senior Software Engineer",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050816",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
