import * as React from "react";
import Navservice from "../components/about/navservice";
import Presentation from "../components/about/presentation";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Navservice />
      <Presentation />
    </Layout>
  );
};

export default IndexPage;
