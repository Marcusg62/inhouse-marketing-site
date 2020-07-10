import React from "react"
import Layout from "../components/layout";
import FormFormat from "../components/Formformat";
// import "../components/style/signUp.css"


const signUp = () => {
  const renderSignUp = () => {
    return (
        <div>
          <FormFormat isContactForm={false} />
        </div>
    )}

  return (
    <Layout>
      {renderSignUp()}
    </Layout>
  );
}

export default signUp;
