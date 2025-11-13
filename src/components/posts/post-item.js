import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./post-item.module.css";
export default function PostItem(props) {
  const {
    post: { title, id: slug, image = "getting-started-nextjs.png", body, date },
  } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/getting-started-with-nextjs/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{body}</p>
        </div>
      </Link>
    </li>
  );
}
