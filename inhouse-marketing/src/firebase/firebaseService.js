//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"

const auth = firebase.auth()
const db = firebase.firestore()

export const submitOnBoardingForm = (payload) =>{
    //return a promise to handleSubmit, dont catch the error, or handleSubmit would
    // get a resolved result instead of catching the error bc the erro already solved here..
  return db.collection("onboarding_form_submission").add(payload)
    .then((data)=>console.log("here's the data",data.id))
}

export const createUser = payload =>{
    auth.createUserWithEmailAndPassword(payload.email, payload.password).then((data) => alert(data))
    .catch(err=>console.log("Error!",err.message))
}
