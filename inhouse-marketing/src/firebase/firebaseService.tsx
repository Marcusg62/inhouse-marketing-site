//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"
import {useContext} from 'react'
import { functions } from "firebase"
import {UserStateContext, UserDispatchContext} from "../context/GlobalUserContext"

const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()



const auth = firebase.auth()
const db = firebase.firestore()
const firebaseFunctions = firebase.functions()

const creditialsWithPopup = provider => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result: any) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken
      // The signed-in user info.
      const user = result.user
      // ...
      console.log(token)
      console.log(user)
    })
    .catch(function (error) {
      console.log(error.message)
    })
}

export const submitOnBoardingForm = payload => {
  //return a promise to handleSubmit, dont catch the error, or handleSubmit would
  // get a resolved result instead of catching the error bc the erro already solved here..
  return db.collection("onboarding_form_submission").add(payload)
}

// create users with email and password
export const createUser_connectForm = async (restaurantID, formSubmission, emailpwVals) => {

  //create user with email and pw

  await createUserWithEmailPw(emailpwVals.email, emailpwVals.password)

  const createUserWithRestaurant = firebaseFunctions.httpsCallable("create_user_with_restaurant");

  const functionData = {
    restaurantID: restaurantID,
    name: formSubmission.name,
    phone: formSubmission.phone
  }

  try {
    let result = await createUserWithRestaurant(functionData)
    return result;
  } catch (error) {
    console.error("within firebase service:", error)
  }


}

// create users with google account
const createUserWithEmailPw = (email, pw) => {
  auth.createUserWithEmailAndPassword(email, pw)
  .catch(err => alert(err))
}

// create users with google account
export const createUserWithGoogle = () => {
  creditialsWithPopup(googleProvider)
}
// create users with fb account
export const createUserWithFacebook = () => {
  creditialsWithPopup(facebookProvider)
}

//sign out users
export const signOut = () => {
  auth
    .signOut()
    .then(() => alert("Sign out Succesfully!"))
    .catch(err => alert(err))
}

// used to conditionally rendering your UI
export const monitorAuth = () => {
  // const dispatch = useContext(UserDispatchContext)
  // const state = useContext(UserStateContext)
  // console.log(state)
  // console.log(dispatch)
  auth.onAuthStateChanged(user => {
    return user
  })
}
