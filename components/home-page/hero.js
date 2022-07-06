import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={`/images/saeed.png`}
          alt="My profile image"
          width={300}
          height={300}
          layout="responsive"
        />
      </div>
      <h1>Hi, I'm Saeed</h1>
      <p>I'm a Web front-end developer for front end react js</p>
    </section>
  );
}
