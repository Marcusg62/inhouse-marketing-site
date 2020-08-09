import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from "gatsby-plugin-firebase"
import React from "react"

const firebaseFunctions = firebase.functions()


const firebaseuipage = dataToSubmit => {
  console.log("within firebase ui", dataToSubmit)
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: async(authResult) => {
        const createUserWithRestaurant = firebaseFunctions.httpsCallable("create_user_with_restaurant");       
        try {
          let result = await createUserWithRestaurant(dataToSubmit)
          return result;
        } catch (error) {
          console.error("within firebase service:", error)
        }
        return false
      },
    },
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

    // callbacks: {
    //   signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    //     var user = authResult.user;
    //     var credential = authResult.credential;
    //     var isNewUser = authResult.additionalUserInfo.isNewUser;
    //     var providerId = authResult.additionalUserInfo.providerId;
    //     var operationType = authResult.operationType;
    //     // Do something with the returned AuthResult.
    //     // Return type determines whether we continue the redirect automatically
    //     // or whether we leave that to developer to handle.
    //     console.log(authResult)
    //     return true;
    //   }},
    tosUrl: "<your-tos-url>",
    privacyPolicyUrl: function () {
      window.location.assign("<your-privacy-policy-url>")
    },
  }

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  )
}

export default firebaseuipage