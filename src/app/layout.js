import "@/styles/globals.css";
import React from "react";
import Layout from "@/components/Layout/Layout";

export const metadata = {
  title: "Next Blog",
  description: "A simple blog built with Next.js App Router",
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
