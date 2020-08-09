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