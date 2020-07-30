import React from 'react'
import Layout from '../components/layout'
import createUserForm from '../components/signupComponents/createUserForm'


const Dashboard = props => {
          {/* create a dashboard to detect:
          1. if there is a user already, just logged in
          2. if there is no user, detect the state that if it comes from the submitting site,
          if so, add a paragraph saying congrats on registration
          3. if no user and not come from a submitted page, just ask for sign in or sign up
           */}   
    const renderDashboard = () =>{
       return (
//          <>
// {           props.location.state.fromOnboardingForm? 
//            <h1>You submit succesfully! Let's create a user account here.</h1> : null}
//            {createUserForm()}
//          </>
         
       )
    }

    return(
      <Layout>
        {renderDashboard()}
      </Layout>
    )
}

export default Dashboard