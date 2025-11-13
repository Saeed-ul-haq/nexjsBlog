import React, { Fragment, Suspense } from "react";
import MainNavigation from "./MainNavigation";
import HeaderSkeleton from "../skeleton-loader/headerSkeleton";
export default function Layout(props) {
  return (
    <Fragment>
      <Suspense fallback={<HeaderSkeleton />}>
        <MainNavigation />
      </Suspense>
      <main>{props.children}</main>
    </Fragment>
  );
}
