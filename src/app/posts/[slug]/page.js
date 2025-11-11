import React from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

// Placeholder detail page. Replace with real post content as needed.
export default function PostDetailPage({ params }) {
  const { slug } = params;
  const DUMMY_POST = [
    {
      slug,
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
