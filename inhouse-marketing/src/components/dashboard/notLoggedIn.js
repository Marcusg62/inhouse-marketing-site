import React from 'react'
import createUserForm from '../createUserForm'


const NotLoggedIn = props => {
   const {propertiesPassed} = props

    return(
      <>
        {propertiesPassed("fromOnboardingForm")? 
          <h1>You submit succesfully! Let's create a user account here.</h1> : null}
          {/* RestaurantID would be null or a realID object depending on how the dashboard page is navigated */}
          {createUserForm(
            {
            restaurantID: propertiesPassed("restaurantID"),
            formSubmission: propertiesPassed("payload")
          }
        )}
       </>
    )
}

export default NotLoggedIn