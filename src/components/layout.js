import React from "react";
import Header from "./header";
import Title from "./title";
import Footer from "./footer";
import Navigation from "./navigation";
import { main } from "../style/other.module.scss";
import MetaTag from "./metaTag";

function Layout({ children }) {
  return (
    <div>
      <MetaTag />
      <Header />
      <main className={main}>
        <Title />
        <Navigation />
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
