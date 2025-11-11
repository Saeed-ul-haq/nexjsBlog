import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout/Layout";
import { headers } from "next/headers";
import { logRequestHeaders } from "../lib/getHeaderData";

export const generateMetadata = async () => {
  const header = headers();
  const host = header.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  logRequestHeaders(host, header);

  const baseUrl = new URL(`${protocol}://${host}`);

  return {
    title: "Next Blog",
    description: "A simple blog built with Next.js App Router",
    metadataBase: baseUrl,
    openGraph: {
      title: "Next Blog",
      description: "A simple blog built with Next.js App Router",
      type: "website",
      images: [
        {
          url: "/opengraph-image", // ✅ use extension if static
          width: 1200,
          height: 630,
          alt: "Next Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/opengraph-image"],
    },
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
