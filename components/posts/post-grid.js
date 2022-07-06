import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

export default function PostGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}

PostGrid.defaultProps = {
  posts: [],
};
