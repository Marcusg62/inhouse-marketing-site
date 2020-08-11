import React from 'react'
import firebaseuipage from '../firebaseui'


const NotLoggedIn = props => {
   const {propertiesPassed} = props
      // decide which data to pass to firebase UI to be used in call back
   const dataToSubmit = propertiesPassed && propertiesPassed.restaurantID? 

   {
     restaurantID: propertiesPassed.restaurantID,
     name:propertiesPassed.formSubmission.name,
     phone: propertiesPassed.formSubmission.phone
   }
   :{
    restaurantID: null ,
    name: null,
    phone: null
   }


    return(
      <>
          {/* RestaurantID would be null or a realID object depending on how the dashboard page is navigated */}
        {firebaseuipage(dataToSubmit)}
       </>
    )
}

export default NotLoggedIn