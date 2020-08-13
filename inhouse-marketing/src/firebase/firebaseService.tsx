//This document will handle everything to connect with firebase database or authetication
import firebase from "gatsby-plugin-firebase"

export const fetchUserRestaurant = async userEmail => {
  const db = firebase.firestore()

  let result = await db
    .collection("onboarding_form_users")
    .doc(userEmail)
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!")
      }
    })
  console.log(result)
  return result
}

const creditialsWithPopup = provider => {
  const auth = firebase.auth()

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
  const db = firebase.firestore()

  return db.collection("onboarding_form_submission").add(payload)
}

// create users with email and password
export const createUser_connectForm = async (
  restaurantID,
  formSubmission,
  emailpwVals
) => {
  //create user with email and pw

  await createUserWithEmailPw(emailpwVals.email, emailpwVals.password)
  const firebaseFunctions = firebase.functions()

  const createUserWithRestaurant = firebaseFunctions.httpsCallable(
    "create_user_with_restaurant"
  )

  const functionData = {
    restaurantID: restaurantID,
    name: formSubmission.name,
    phone: formSubmission.phone,
  }

  try {
    let result = await createUserWithRestaurant(functionData)
    return result
  } catch (error) {
    console.error("within firebase service:", error)
  }
}

// create users with google account
const createUserWithEmailPw = async (email, pw) => {
  try {
    const auth = firebase.auth()

    await auth.createUserWithEmailAndPassword(email, pw)
  } catch (err) {
    console.log(err)
    alert(err)
  }
}

// create users with google account
export const createUserWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  creditialsWithPopup(googleProvider)
}
// create users with fb account
export const createUserWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()

  creditialsWithPopup(facebookProvider)
}

//sign out users
export const signOut = () => {
  const auth = firebase.auth()

  auth
    .signOut()
    .then(() => alert("Sign out Succesfully!"))
    .catch(err => alert(err))
}

// used to conditionally rendering your UI
export const monitorAuth = setUser => {
  const auth = firebase.auth()

  auth.onAuthStateChanged(user => {
    user ? setUser(user) : setUser(null)
  })
}
