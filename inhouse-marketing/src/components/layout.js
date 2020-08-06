import React, { useContext, useState, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/navBar"
import "./style/layout.css"
import SEO from "./seo"
import "./style/style.scss"
import "./style/util.scss"
import {monitorAuth} from "../firebase/firebaseService"

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

monitorAuth(setUser)

  return (
    <>
      <UserStateContext.Provider value={user}>
        <SetUserContext.Provider value={setUser}>
          <div>
            <SEO />
            <Navbar />
            <main>{children}</main>
          </div>
        </SetUserContext.Provider >
      </UserStateContext.Provider>
    </>
  )
}


export default Layout
