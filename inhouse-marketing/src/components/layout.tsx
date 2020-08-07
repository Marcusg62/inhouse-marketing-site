import React, { useContext, useState, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.scss"
import "./style/util.scss"
import { monitorAuth } from "../firebase/firebaseService"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

export const UserStateContext = createContext(null)
export const SetUserContext = createContext()

const Layout = ({ children }) => {
  const [user, setUser] = useState()
  console.log(user)
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

  monitorAuth(setUser)


  return (
    <MuiThemeProvider theme={theme}>
      <UserStateContext.Provider value={user}>
        <SetUserContext.Provider value={setUser}>
          <SEO />
          <Navbar />
          <main>{children}</main>
          </SetUserContext.Provider >
      </UserStateContext.Provider>
    </MuiThemeProvider>
  )
}

export default Layout
