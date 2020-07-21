//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"
var provider = new firebase.auth.GoogleAuthProvider();

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

export const createUserWithGithub =() =>{
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(token)
    console.log(user)
  }).catch(function(error) {
     console.log(error.message)
  });
}
