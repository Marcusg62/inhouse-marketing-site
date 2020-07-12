import React from "react"
import Layout from "../layout";
// import "../components/style/signUpSuccess.css"


const AfterSubmit = props => {

  return (
    <Layout>
        <div>
            {props.signupSuccess ? <h1>Success</h1> : <h1>something wrong</h1>}
        </div>
    </Layout>
  );
}

export default AfterSubmit;
