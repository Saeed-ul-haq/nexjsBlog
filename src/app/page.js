import React, { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

export default function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next js",
      date: "2022-02-10",
      image: "getting-started-nextjs.png",
      excerpt: "Next js is React framework for production",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with Next js",
      date: "2022-02-10",
      image: "getting-started-nextjs.png",
      excerpt: "Next js is React framework for production",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with Next js",
      date: "2022-02-10",
      image: "getting-started-nextjs.png",
      excerpt: "Next js is React framework for production",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with Next js",
      date: "2022-02-10",
      image: "getting-started-nextjs.png",
      excerpt: "Next js is React framework for production",
    },
  ];

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
