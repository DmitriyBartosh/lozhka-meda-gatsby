import * as React from "react";
import Layout from "./src/components/layout";
import "./src/style/main.scss";

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
