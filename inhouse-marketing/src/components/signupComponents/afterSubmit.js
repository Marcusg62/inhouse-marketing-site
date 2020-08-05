import React from "react"
import {Link} from "gatsby"
import createUserForm from "../createUserForm"

// import "../components/style/signUpSuccess.css"




const AfterSubmit = props => {

const createAccountMethods = () =>{
    return (
      <>
        <h1>You submit succesfully! Let's create a user account here.</h1>
        {createUserForm()}
      </>
    )
  }

const failedComponent = () =>{
    return <h1>Sorry, something wrong. Please <Link to="/signUpV2">try</Link> again.</h1> 
  }

  return (
    <>
      {props.signupSuccess ? createAccountMethods() : failedComponent() }
    </>
  );
}

export default AfterSubmit;
