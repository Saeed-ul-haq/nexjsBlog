"use client"; // Add this at the very top

import React from "react";
import "./style.css";

export default function PostSkeleton() {
  return (
    <div className="gridWrapper">
      <div className="itemWrapper ">
        <div className="imageWrapper shimmer"></div>
        <div className="contentWrapper">
          <div className="titleWrapper shimmer"></div>
          <div className="body ">
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
          </div>
        </div>
      </div>
      <div className="itemWrapper ">
        <div className="imageWrapper shimmer"></div>
        <div className="contentWrapper ">
          <div className="titleWrapper shimmer"></div>
          <div className="body ">
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
          </div>
        </div>
      </div>
      <div className="itemWrapper ">
        <div className="imageWrapper shimmer"></div>
        <div className="contentWrapper ">
          <div className="titleWrapper shimmer"></div>
          <div className="body ">
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
            <div className="body-content shimmer"></div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
