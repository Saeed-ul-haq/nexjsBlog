import React from "react";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { notFound } from "next/navigation";
export const dynamic = "force-dynamic";

async function fetchPost(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("Failed to fetch post", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { postId } = await params;
  const post = await fetchPost(postId);
  if (!post) {
    return { title: "Post not found" };
  }

  const metadataBaseUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL);
  const ogImagePath = `/posts/${postId}/opengraph-image`;

  return {
    metadataBase: metadataBaseUrl,
    title: `${post.title} | Next Blog`,
    description: "Post details and content",
    openGraph: {
      title: post.title,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${postId}`,
      images: [
        {
          url: ogImagePath,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImagePath],
    },
  };
}

export default async function PostDetailPage({ params }) {
  const { postId } = await params;
  const post = await fetchPost(postId);
  if (!post) {
    return notFound();
  }

  const DETAIL_LIST = [
    {
      id: post.slug,
      title: post.title,
      date: post.date,
      image: post.image,
      excerpt: post.excerpt,
    },
  ];

  return (
    <>
      <Hero />
      <FeaturedPosts posts={DETAIL_LIST} />
    </>
  );
}
