import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./layout.module.scss";

import Header from "./Header/header";
import Footer from "./Footer/footer";


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout;