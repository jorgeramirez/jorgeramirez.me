import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata;
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. Made with&nbsp;
        <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
          Gatsby
        </a>
        . Template by&nbsp;
        <a href="https://github.com/surudhb/gatsby-personal-site-template" target="_blank" rel="noopener noreferrer">
          surudhb
        </a>
      </span>
    </div>
  );
};
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
