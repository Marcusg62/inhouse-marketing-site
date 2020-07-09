import React from "react"
import Layout from "../components/layout";
// import "../components/style/Pricing.css"


const pricing = () => {
  const renderPricing = () => {
    return (
      <div class="container">

        <h1 class="m-t-16 m-b-16 txt-center">Online Ordering Pricing Options</h1>

        <div class="options bg-light p-32 m-b-32">
            <p class="fs-18">We are unlike any of our competitors. We are here to help you manage your online presence.
                If your online presence doesn't make sense, our business model doesn't work. That's why <span class="txt-bold">every restaurant receives the following services. </span></p>
            <ul class="m-l-36 m-t-8 m-b-16 fs-18">
                <li>Dedicated Representative</li>
                <li>24/7 On-site Support</li>
                <li>Free Website</li>
                <li>Free Domain & SEO</li>
                <li>Free Marketing Materials</li>
                <li>Google My Business, Yelp, Social Media Management/Support</li>
            </ul>
        </div>

        <div class="columns">
            <ul class="price">
                <li class="header">Strategic</li>
                <li class="grey">5% / Order</li>
                <li>Restaurant pays 5%</li>
                <li class="priceDescription">Perfect for restaurants who want to lead customers away from competitors like Grubhub. </li>
                <li class="grey">
                <button mat-flat-button color="primary" routerLink="/get-started">Get Started</button>
                </li>
            </ul>
        </div>

        <div class="columns">
            <ul class="price">
                <li class="header bg-primary">Preferred</li>
                <li class="grey">Free</li>
                <li>Customer pays 5%</li>
                <li class="priceDescription">Best match for most restaurants who want to keep 100% of their profit. </li>
                <li class="grey">
                <button mat-flat-button color="primary" routerLink="/get-started">Get Started</button>
                </li>
            </ul>
        </div>


        <div class="columns">
            <ul class="price">
                <li class="header">Money Maker</li>
                <li class="grey">Free<b class="txt-bold fs-20">+</b> <br /></li>
                <li>Customer pays 5-10%</li>
                <li class="priceDescription">Restaurant keeps extra profit. <br /> Made for restaurants who want to make up for other costs. </li>
                <li class="grey">
                <button mat-flat-button color="primary" routerLink="/get-started">Get Started</button>
                </li>
            </ul>
        </div>

        </div>
    )}

  return (
    <Layout>
      {renderPricing()}
    </Layout>
  );
}

export default pricing;
