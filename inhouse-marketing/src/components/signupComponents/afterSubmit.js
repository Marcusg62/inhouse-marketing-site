import React from "react"
// import "../components/style/signUpSuccess.css"


const AfterSubmit = props => {

  return (
    <>
      {props.signupSuccess ? <h1>Success</h1> : <h1>something wrong</h1>}
    </>
  );
}

export default AfterSubmit;
