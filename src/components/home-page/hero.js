import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={`/mountain.jpg`}
          alt="My profile image"
          width={300}
          height={300}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <h1>Hi, I&apos;m Saeed</h1>
      <p>I&apos;m a Web front-end developer for front end react js</p>
    </section>
  );
}
