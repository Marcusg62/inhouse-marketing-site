/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import React from "react"
import GlobalUserContext from "./src/context/GlobalUserContext"

exports.wrapRootElement = ({ element }) => {
  return (
    <GlobalUserContext>
      {element}
    </GlobalUserContext>
  )
}