import React, { useContext } from 'react'
import Layout from '../components/layout'
import LoggedIn from '../components/dashboard/loggedIn'
import NotLoggedIn from '../components/dashboard/notLoggedIn'
import {UserStateContext} from "../components/layout"


const Dashboard = props => {
          {/* create a dashboard to detect:
          1. if there is a user already, just logged in
          2. if there is no user, detect the state that if it comes from the submitting site,
          if so, add a paragraph saying congrats on registration
          3. if no user and not come from a submitted page, just ask for sign in or sign up
           */} 
    // const user = useContext(UserStateContext)
    // console.log(user)
  let propertiesPassed;
     
  if(props.location.state){
     propertiesPassed = props.location.state
  }

  console.log("propertiesPassed", propertiesPassed)

    

    const renderDashboard = () =>{
       return (
         <UserStateContext.Consumer>
          {user => {
            return user? <LoggedIn user={user} /> : <NotLoggedIn propertiesPassed={propertiesPassed}/>
          }}
         </UserStateContext.Consumer>
         
       )
    }

    return(
      <Layout>
        {renderDashboard()}
      </Layout>
    )
}

export default Dashboard