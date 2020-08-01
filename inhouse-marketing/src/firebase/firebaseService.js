//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const auth = firebase.auth()
const db = firebase.firestore()

const creditialsWithPopup = provider => {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(token)
      console.log(user)
    }).catch(function (error) {
      console.log(error.message)
    });
}

export const submitOnBoardingForm = (payload) => {
  //return a promise to handleSubmit, dont catch the error, or handleSubmit would
  // get a resolved result instead of catching the error bc the erro already solved here..
  return db.collection("onboarding_form_submission").add(payload)
}

export const createUser = payload => {
  auth.createUserWithEmailAndPassword(payload.email, payload.password).then((data) => alert(data))
    .catch(err => console.log("Error!", err.message))
}

export const createUserWithGoogle = () => {
  creditialsWithPopup(googleProvider)
}

export const createUserWithFacebook = () => {
  creditialsWithPopup(facebookProvider)
}

export const signOut = () => {
  auth.signOut()
    .then(() => alert("Sign out Succesfully!"))
    .catch(err => console.log(err))
}

export const monitorAuth = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('logged in!')
      console.log(user.email)
      
    }
    else {
      console.log('logged out!')

    }
  })
}
