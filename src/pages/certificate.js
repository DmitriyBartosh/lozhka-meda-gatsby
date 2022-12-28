import React, { useEffect } from "react";
import CertificateListSpecial from "../components/certificate/certificateListSpecial";
import Layout from "../components/layout";

function Certificate() {
  useEffect(() => {
    const certificateLink = document.getElementById("certificatelink");
    certificateLink.style.display = "none";

    return () => {
      certificateLink.style.opacity = "grid";
    };
  }, []);

  return (
    <Layout>
      <CertificateListSpecial />
    </Layout>
  );
}

export default Certificate;
