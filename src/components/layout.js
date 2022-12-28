import React, { useEffect } from "react";
import Header from "./header";
import Title from "./title";
import Footer from "./footer";
import Navigation from "./navigation";
import { useWindowScroll, useLocation, useWindowSize } from "react-use";
import { main } from "../style/other.module.scss";
import MetaTag from "./metaTag";
import Buttonlink from "./certificate/buttonlink";

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
        <Navigation />
        <Buttonlink />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
