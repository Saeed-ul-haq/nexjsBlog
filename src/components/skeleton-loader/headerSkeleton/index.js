"use client";
import React from "react";
import "./style.css";
const HeaderSkeleton = () => {
  return (
    <div className=".headerWrapper">
      <div className=".logoWrappper"></div>
      <div className="navigationWrapper">
        <div className=".linkWrapper"></div>
        <div className=".linkWrapper"></div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
