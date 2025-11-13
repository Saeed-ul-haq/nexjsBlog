import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

export default async function PostGrid() {
  let posts = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/posts`, {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    posts = data?.posts;
  } catch (error) {
    console.error("Failed to load posts", error);
  }
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
}

PostGrid.defaultProps = {
  posts: [],
};
