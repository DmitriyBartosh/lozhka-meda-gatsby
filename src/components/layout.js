import React, { useEffect } from "react";
import { useWindowScroll, useLocation, useWindowSize } from "react-use";
import { main } from "../style/other.module.scss";

import Header from "./header";
import Title from "./title";
import Footer from "./footer";
import Navigation from "./navigation";
import Buttonlink from "../components/certificate/buttonlink";
import MetaTag from "./metaTag";

function Layout({ children }) {
  const { width } = useWindowSize();
  const location = useLocation();
  const { y } = useWindowScroll();

  useEffect(() => {
    if (width > 1024) {
      window.scrollTo(0, y);
    } else return;
  }, [location, width]);

  return (
    <>
      <MetaTag />
      <Header />
      <main className={main}>
        <Title />
        <Buttonlink />
        <Navigation />

        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
