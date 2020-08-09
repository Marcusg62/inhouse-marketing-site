import React from 'react'
import firebaseuipage from '../firebaseui'


const NotLoggedIn = props => {
   const {propertiesPassed} = props
   console.log(propertiesPassed)

   // decide which data to pass to firebase UI to be used in call back
   const dataToSubmit = propertiesPassed? 

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
        {propertiesPassed? 
          <h1>You submit succesfully! Let's create a user account here.</h1> : null
        }
          {/* RestaurantID would be null or a realID object depending on how the dashboard page is navigated */}
          {/* {createUserForm(
            {
            restaurantID: propertiesPassed.restaurantID"),
            formSubmission: propertiesPassed.formSubmission")
          })
          } */}

        {firebaseuipage(dataToSubmit)}
       </>
    )
}

export default NotLoggedIn