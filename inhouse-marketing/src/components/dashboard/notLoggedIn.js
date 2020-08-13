import React from 'react'
import firebaseuipage from '../firebaseui'


const NotLoggedIn = props => {
   const {restaurantID, formSubmission} = props
   const isFromSubmissionForm = restaurantID
      // decide which data to pass to firebase UI to be used in call back
   const dataToSubmit = isFromSubmissionForm? 

   {
     restaurantID: restaurantID,
     name:formSubmission.name,
     phone: formSubmission.phone
   }
   :{
    restaurantID: null ,
    name: null,
    phone: null
   }


    return(
      <>
          {/* RestaurantID would be null or a realID object depending on how the dashboard page is navigated */}
        {firebaseuipage(dataToSubmit, isFromSubmissionForm)}
       </>
    )
}

export default NotLoggedIn