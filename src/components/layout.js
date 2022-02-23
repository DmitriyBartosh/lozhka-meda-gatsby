import React from "react";
import Header from "./header";
import Title from "./title";
import Footer from "./footer";
import Navigation from "./navigation";
import { main } from "../style/other.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={main}>
        <Title />
        <Navigation />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
