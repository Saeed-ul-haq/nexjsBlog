import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import HeroSkeleton from "@/components/skeleton-loader/heroSkeleton/heroSkeleton";
import React, { Fragment, Suspense } from "react";

export const dynamic = "force-dynamic";

export default  function HomePage() {
  return (
    <Fragment>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <FeaturedPosts />
    </Fragment>
  );
}
