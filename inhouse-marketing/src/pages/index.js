import React from "react"
import Layout from "../components/layout";
import "../components/style/home.css"
import Formformat from "../components/Formformat";


const Home = () => {
  const getHome = () => {
    return (
    <>
      <div className="hero pos-relative flex-c-b">
          <h2 className="text-light fs-56 m-b-16 w-700">Online Ordering Customized For Your
              Restaurant</h2>
      </div>

      <div className="container bg-light">
          <div className="flex-c">
              <div className="box">
                  <h2 className="w-full fs-46 text-center">Keep 100% of your profit. </h2>
                  <h4 className="text-center m-t-8 sans-regular">Take control of your business, beat the big ordering platforms
                      like Grubhub. </h4>
              </div>
          </div>
          <h2 className="m-t-20 p-l-16 fs-36">Our Mission</h2>
          <hr />
          <h4 className="p-l-16 m-t-8 sans-regular m-b-50 m-r-8">Our mission is to be the <b className="sans-bold">ethical ordering
                  platform.</b>
              We will never take orders without your permission or charge hidden fees. We strive to build technology that
              empowers
              your business and customers. </h4>


          <div className="triplet flex-w flex-c">

              <div className="triple">
                  <h2 className="sans-bold tripleHead">SEO + MOBILE FRIENDLY</h2>
                  <hr />
                  <p className="txt-left m-t-8">We build websites optimized for Google search results and mobile devices. Your
                      customers will be able to easily find you. </p>
              </div>
              <div className="triple">
                  <h2 className="sans-bold tripleHead">ONLINE ORDERING</h2>
                  <hr />
                  <p className="txt-left m-t-8">Customers can easily view your menu and order online. We have a robust online
                      ordering platform that allows you to receive orders however you like and customize your menu on the fly.
                  </p>
              </div>
              <div className="triple">
                  <h2 className="sans-bold tripleHead">CUSTOMER FEEDBACK</h2>
                  <hr />
                  <p className="txt-left m-t-8">We create a feedback loop so customers will be able to send feedback directly to
                      you. When you receive positive reviews, we encourage them to post online. </p>
              </div>
          </div>



    <h2 className="m-t-40 p-l-16 fs-36">See it in action</h2>
    <hr />
    <h4 className="p-l-16 m-t-8 sans-regular m-r-8">Hot Thai is a demo restaurant we have setup so you can see how it works
        and even make a test order. <br />
        To make a test order, add items to your cart and complete the checkout flow. When it asks for your credit card
        number, you can use: <br /><br />
        Card # "4242 4242 4242 42424" <br />
        MM/DD: "04/24" <br />
        CVC: "242" <br />
        ZIP: "42424"
    </h4>
    <div className="m-auto m-t-16 m-b-16 flex-c">
        <button mat-raised-button color="primary"><a style={{"font-family": "Poppins-Regular, sans"}}
                href="https://demo.inhouseorders.io" target="_blamk">Hot Thai
                Demo</a></button>
    </div>
</div>
</>
    )}

  return (
    <Layout>
        <Formformat isContactForm={true} />
      {getHome()}
    </Layout>
  );
}

export default Home;