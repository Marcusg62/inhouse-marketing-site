//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"
import { functions } from "firebase";
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const auth = firebase.auth()
const db = firebase.firestore()
const firebaseFunctions = firebase.functions()

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

// create users with email and password
export const createUser = (values, restaurantID, payload)=> {
  // 1. create a user with email and pw
  // 2. create a user in db
  // 3. the user should look like: {
  //   email: ...,
      //  restaurantID:...
  // }
  const linkUserWithRestaurantID = data =>{
    const createUserWithRestaurant = firebaseFunctions.httpsCallable("create_user_with_restaurant")
    const informationForDB = {restaurantID: restaurantID, user: data, name: payload.name,phone:payload.phone}
    return createUserWithRestaurant(informationForDB)
  }
  
  return auth.createUserWithEmailAndPassword(values.email, values.password)
    .then((data) => linkUserWithRestaurantID(data))
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
  auth.signOut()
    .then(() => alert("Sign out Succesfully!"))
    .catch(err => console.log(err))
}

// used to conditionally rendering your UI
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
