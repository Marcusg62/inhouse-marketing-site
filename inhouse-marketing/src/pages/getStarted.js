import React from "react"
import Layout from "../components/layout";
// import "../components/style/getStarted.css"


const getStarted = () => {
  const renderGetStarted = () => {
    return (
        <div 
        className="txt-center flex-w flex-c p-t-68 p-b-68 m-auto m-t-48 bg-light" 
        style={{
            "width": "100%",
            "max-width": "700px"}}>
         <h3 className="fs-48">We are working on a great onboarding experience.</h3>
         <p className="fs-24 m-t-24">In the mean time, contact us directly to get started. </p>
         <p className="fs-18 sans">info@inhouseorders.io. </p>
     </div>
    )}

  return (
    <Layout>
      {renderGetStarted()}
    </Layout>
  );
}

export default getStarted;
