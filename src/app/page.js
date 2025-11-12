import React, { Fragment } from "react";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let posts = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, {
      next: { revalidate: 60 },
    });
    posts = res.ok ? await res.json() : [];
  } catch (error) {
    console.error("Failed to load posts", error);
  }

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}
