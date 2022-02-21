import React from "react";
import Header from "./header";
import Title from "./title";
import Footer from "./footer";
import Navigation from "./navigation";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <Title />
        <Navigation />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
