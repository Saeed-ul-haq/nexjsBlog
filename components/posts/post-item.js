import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";
export default function PostItem(props) {
  const {
    post: { title, slug, image, excerpt, date },
  } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/getting-started-with-nextjs/${image}`;
  return (
    <li className={classes.post}>
      <Link href="/">
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive"/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
