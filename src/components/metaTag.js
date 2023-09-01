import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const MetaTag = ({ title }) => {
  const { site } = useStaticQuery(query);
  const { siteDescription, siteKeyWords, siteImage, siteTwitter, siteUrl } =
    site?.siteMetadata;

  const seo = {
    title: title,
    description: siteDescription,
    image: `${siteUrl}${siteImage}`,
    url: `${siteUrl}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={siteKeyWords} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteTwitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default MetaTag;

MetaTag.propTypes = {
  title: PropTypes.string,
};

MetaTag.defaultProps = {
  title: "Студия массажа | Время для себя",
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteDescription
        siteKeyWords
        siteImage
        siteTwitter
        siteUrl
      }
    }
  }
`;
