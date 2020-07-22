//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"

const auth = firebase.auth()
const db = firebase.firestore()

export const submitOnBoardingForm = (payload) =>{
  return db.collection("onboarding_form_submission").add(payload)
    .then((data)=>console.log("here's the data",data))
    .catch((error)=>console.log("Here's the error:", error))
}
