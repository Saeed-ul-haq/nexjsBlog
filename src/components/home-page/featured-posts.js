import React, { Suspense } from "react";
import PostGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";
import PostSkeleton from "@/components/skeleton-loader/postSkeleton";

export default async function FeaturedPosts() {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Suspense fallback={<PostSkeleton />}>
        <PostGrid />
      </Suspense>
    </section>
  );
}
