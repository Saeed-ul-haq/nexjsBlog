"use client"; // Add this at the very top

import React from "react";
import "./style.css";

export default function HeroSkeleton() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-wrapper">
        <div className="skeleton-avatar shimmer" />
        <div className="skeleton-title shimmer" />
        <div className="skeleton-subtitle shimmer" />
      </div>
    </div>
  );
}
