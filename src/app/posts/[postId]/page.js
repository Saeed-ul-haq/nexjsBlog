import React from "react";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { notFound } from "next/navigation";
import { headers } from "next/headers";

export const POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next js",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with Next js 2",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with Next js 3",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with Next js 4",
  },
];

export async function generateStaticParams() {
  return POSTS.map((p) => ({ postId: p.slug }));
}

export async function generateMetadata({ params }) {
  const { postId } = await params;
  const post = POSTS.find((p) => p.slug === postId);
  if (!post) {
    return { title: "Post not found" };
  } // --- FIX: Dynamic Base URL Calculation ---

  const header = headers();
  const host = header.get("host");
  const protocol = host.startsWith("localhost") ? "http" : "https";
  // 1. Construct the full dynamic URL string
  const dynamicBaseUrlString = `${protocol}://${host}`;
  //  // 2. Convert the string into a URL object for metadataBase

  //  //    Using 'dynamicBaseUrlString' instead of 'dynamicBaseUrl' for clarity
  const metadataBaseUrl = new URL(dynamicBaseUrlString);

  // 3. Define the RELATIVE path to the Open Graph image

  const ogImagePath = `/posts/${postId}/opengraph-image`;

  return {
    metadataBase: metadataBaseUrl, // 4. Set the base URL here
    title: `${post.title} | Next Blog`,
    description: "Post details and content",
    openGraph: {
      title: post.title,
      type: "article",
      images: [
        {
          // 5. Use the RELATIVE path. Next.js combines metadataBase + ogImagePath.
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image", // 6. Use the RELATIVE path here too.
      images: [ogImagePath],
    },
  };
}

// Placeholder detail page. Replace with real post content as needed.
export default function PostDetailPage({ params }) {
  const { postId } = params;
  const exists = POSTS.some((p) => p.slug === postId);
  if (!exists) {
    return notFound();
  }
  const DUMMY_POST = [
    {
      id: postId,
      title: "Post Detail",
      date: "2022-02-10",
      image: "getting-started-nextjs.png",
      excerpt: "This is a placeholder for post details.",
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </>
  );
}
