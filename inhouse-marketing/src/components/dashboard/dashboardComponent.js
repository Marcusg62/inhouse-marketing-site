import React from 'react'
import LoggedIn from './loggedIn'
import NotLoggedIn from './notLoggedIn'
import {UserStateContext} from "../layout"
import {fetchUserRestaurant} from "../../firebase/firebaseService"


const DashboardComponent = props => {
  const {restaurantID, formSubmission} = props
          {/* create a dashboard to detect:
          1. if there is a user already, just logged in
          2. if there is no user, detect the state that if it comes from the submitting site,
          if so, add a paragraph saying congrats on registration
          3. if no user and not come from a submitted page, just ask for sign in or sign up
           */} 
  console.log(restaurantID, formSubmission)

//   let restaurants;

  const renderDashboard = () =>{
      return (
        <UserStateContext.Consumer>
        {user => {
        //   if (user){
        //     // restaurants = fetchUserRestaurant(user.email)
        //     console.log(user.email)
        //     // fetchUserRestaurant(user.email)
        //   }else{
        //     restaurants = null
        //   }
          return user? <LoggedIn user={user} /> : <NotLoggedIn restaurantID = {restaurantID} formSubmission = {formSubmission}/>
        }}
        </UserStateContext.Consumer>
        
      )
  }

    return(
        renderDashboard()
    )
}

export default DashboardComponent