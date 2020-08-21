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
         <h3 className="fs-48">Send us an email to get started. </h3>
         <p className="fs-24 m-t-24">For a quick response, please include your restaurant name, address and your phone number. </p>
         <p className="fs-24 m-t-16">info@inhouseorders.io </p>
     </div>
    )}

  return (
    <Layout>
      {renderGetStarted()}
    </Layout>
  );
}

export default getStarted;
