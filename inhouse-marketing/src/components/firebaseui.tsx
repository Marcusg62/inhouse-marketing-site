import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "gatsby-plugin-firebase"
import React from "react"

const firebaseFunctions = firebase.functions()

const firebaseuipage = (dataToSubmit, isFromSubmissionForm) => {
  console.log("within firebase ui", dataToSubmit)
  var uiConfig = {
  // default is redirect and that's slow
    signInFlow: 'popup',    
    callbacks: {
      signInSuccessWithAuthResult: authResult => {
        const createUserWithRestaurant = firebaseFunctions.httpsCallable("create_user_with_restaurant");       
        try {
           createUserWithRestaurant(dataToSubmit)
             .then((data)=>console.log(authResult.user.uid))
        } catch (error) {
          console.error("within firebase service:", error)
        }
        // so if it comes from the submission form, it will
        // return true, which means it will redirect,
        // else it would stay on dashboard page
        return isFromSubmissionForm
      },
    },
    signInSuccessUrl:"/",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   {
    //     provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //     buttonColor: "#3A3A51",
    //   },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        fullLabel: "Create Custom Account",
        buttonColor: "#ED6A5A",
      },
    ],
    tosUrl: "<your-tos-url>",
    privacyPolicyUrl: function () {
      window.location.assign("<your-privacy-policy-url>")
    },
  }

  return (
    <div>
      <StyledFirebaseAuth uiConfig={(uiConfig as any)} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default firebaseuipage