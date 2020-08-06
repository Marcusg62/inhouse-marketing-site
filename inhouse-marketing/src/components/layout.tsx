import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.scss"
import "./style/util.scss"
import { monitorAuth } from "../firebase/firebaseService"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

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

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#282838",
        main: "#3A3A51",
        dark: "#616173",
        contrastText: "#fff",
      },
      secondary: {
        light: "#a54a3e",
        main: "#ED6A5A",
        dark: "#f0877b",
        contrastText: "#000",
      },
    },
    typography: {
      fontFamily: "made_evolve_sans_regular",
    },

    overrides: {
      MuiButton: {
        root: {
          borderRadius: "40px",
          margin: "4px"
          
        },
      },
    },
  })

  useEffect(() => {
    //everytime a layout is rendered, automatically it will moniter to see if a user is logged in
    monitorAuth()
  })

  return (
    <MuiThemeProvider theme={theme}>
      <SEO />
      <Navbar />
      <main>{children}</main>
    </MuiThemeProvider>
  )
}

export default Layout
