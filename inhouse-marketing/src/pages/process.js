import React from "react"
import Layout from "../components/layout";
// import "../components/style/process.css"


const process = () => {
  const renderProcess = () => {
    return (
        <div class="container">

            <h2 class="m-t-20 fs-36">How It Works</h2>
            <hr />
            <h4 class="p-l-16 m-t-8 sans-regular m-r-8 ">
                <p class="fs-22 sans-bold m-t-26"> 1. Menu Upload </p>
                <p>Upload or send images of your menu and we'll take care of the rest. We'll contact you to make sure we get the
                    details right such as modifiers and descriptions. </p>
                <p class="fs-22 sans-bold m-t-26"> 2. Business Information </p>
                <p>We partner with Stripe to ensure secure payments and the best customer experience. You will make a Stripe
                    account and connect it to our platform to start accepting payments online. </p>
                <br />
                <p>We'll audit your online presence and formulate a strategy to strengthen it. We'll look at
                    factors such as: </p>
                <ul class="m-l-16 m-t-8">
                    <li>Current Website</li>
                    <li>Competitors</li>
                    <li>Search Engine Results</li>
                    <li>Yelp & Social Media</li>
                </ul>
                <p class="fs-22 sans-bold m-t-26"> 3. Receive Orders </p>
                <p>We'll be in contact to find out what is the best way for you to receive orders. We have multiple options such
                    as fax, email, receipt printing and tablet only options. </p>
            </h4>

            <h2 class="m-t-20 fs-36">FAQ - Frequently Asked Questions</h2>
            <hr class="" />
            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="p-l-16 m-t-16">
                <h3 itemprop="name" class="fs-22">How do I get paid? </h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>When customers order online, you will receive funds directly from Stripe into your bank account. Be sure that your Bank Account info is up to date in your Stripe Dashboard. Balances are deposited two business days after the transaction. </p>
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="p-l-16 m-t-16">
                <h3 itemprop="name" class="fs-22">What happens to my domain name? </h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>If you already have a website, we will transfer your domain to our registrar so that we can update your website. We'll take care of any fees associated with domain name registration. If you don't have a website, we'll purchase a domain for you. </p>
                    </div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="p-l-16 m-t-16">
                <h3 itemprop="name" class="fs-22">How do I contact support? </h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <p>We will match you with a Inhouse Representative who speaks English. If you experience any technical difficulties, you can contact your representative and they will take care of your issue ASAP.   </p>
                    </div>
                </div>
            </div>
        </div>
    )}

  return (
    <Layout>
      {renderProcess()}
    </Layout>
  );
}

export default process;
