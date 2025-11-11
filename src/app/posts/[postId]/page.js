import React from "react";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";

// Placeholder detail page. Replace with real post content as needed.
export default function PostDetailPage({ params }) {
  const { postId } = params;
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
