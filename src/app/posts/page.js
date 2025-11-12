import React from "react";
import AllPost from "@/components/posts/all-posts.js";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  let posts = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, {
      next: { revalidate: 600 },
    });
    posts = res.ok ? await res.json() : [];
  } catch (error) {
    console.error("Failed to load posts list", error);
  }
  return <AllPost posts={posts} />;
}
