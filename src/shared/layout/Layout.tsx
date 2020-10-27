import React from "react";
import loadable from "@loadable/component";
const Navbar = loadable(() => import("./navbar/NewNavbar"));
const ErrorBound = loadable(() => import("./ErrorBound"));
const Footer = loadable(() => import("./footer"));
const Subscribe = loadable(() => import("./Subscribe"));

export default function Layout(props: any) {
  return (
    <ErrorBound>
      <Navbar />
      <main>{props.children}</main>
      <Subscribe />
      <Footer />
    </ErrorBound>
  );
}
