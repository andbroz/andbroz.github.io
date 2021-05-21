import * as React from 'react';

// import { useStaticQuery, graphql } from 'gatsby';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `); */

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};

export default Layout;
