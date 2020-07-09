import React from "react"
import Layout from "../components/layout";


const Home = () => {
  const getHome = () => {
    return (
    <>
      <div class="hero pos-relative flex-c-b">
          <h2 class="text-light fs-56 m-b-16 w-700">Online Ordering Customized For Your
              Restaurant</h2>
      </div>

      <div class="container bg-light">
          <div class="flex-c">
              <div class="box">
                  <h2 class="w-full fs-46 text-center">Keep 100% of your profit. </h2>
                  <h4 class="text-center m-t-8 sans-regular">Take control of your business, beat the big ordering platforms
                      like Grubhub. </h4>
              </div>
          </div>
          <h2 class="m-t-20 p-l-16 fs-36">Our Mission</h2>
          <hr />
          <h4 class="p-l-16 m-t-8 sans-regular m-b-50 m-r-8">Our mission is to be the <b class="sans-bold">ethical ordering
                  platform.</b>
              We will never take orders without your permission or charge hidden fees. We strive to build technology that
              empowers
              your business and customers. </h4>


          <div class="triplet flex-w flex-c">

              <div class="triple">
                  <h2 class="sans-bold tripleHead">SEO + MOBILE FRIENDLY</h2>
                  <hr />
                  <p class="txt-left m-t-8">We build websites optimized for Google search results and mobile devices. Your
                      customers will be able to easily find you. </p>
              </div>
              <div class="triple">
                  <h2 class="sans-bold tripleHead">ONLINE ORDERING</h2>
                  <hr />
                  <p class="txt-left m-t-8">Customers can easily view your menu and order online. We have a robust online
                      ordering platform that allows you to receive orders however you like and customize your menu on the fly.
                  </p>
              </div>
              <div class="triple">
                  <h2 class="sans-bold tripleHead">CUSTOMER FEEDBACK</h2>
                  <hr />
                  <p class="txt-left m-t-8">We create a feedback loop so customers will be able to send feedback directly to
                      you. When you receive positive reviews, we encourage them to post online. </p>
              </div>
          </div>



    <h2 class="m-t-40 p-l-16 fs-36">See it in action</h2>
    <hr />
    <h4 class="p-l-16 m-t-8 sans-regular m-r-8">Hot Thai is a demo restaurant we have setup so you can see how it works
        and even make a test order. <br />
        To make a test order, add items to your cart and complete the checkout flow. When it asks for your credit card
        number, you can use: <br /><br />
        Card # "4242 4242 4242 42424" <br />
        MM/DD: "04/24" <br />
        CVC: "242" <br />
        ZIP: "42424"
    </h4>
    <div class="m-auto m-t-16 m-b-16 flex-c">
        <button mat-raised-button color="primary"><a style={{"font-family": "Poppins-Regular, sans"}}
                href="https://demo.inhouseorders.io" target="_blamk">Hot Thai
                Demo</a></button>
    </div>
</div>
</>
    )}

  return (
    <Layout>
      {getHome()}
    </Layout>
  );
}

export default Home;