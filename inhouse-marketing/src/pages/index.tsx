import React from "react"
import Layout from "../components/layout"
import "../components/style/home.css"
import { Button, Box } from "@material-ui/core"


const Home = () => {
  const getHome = () => {
    return (
      <>
        <div className="block"></div>
        <div className="m-t-32 text" >
          <h1 className="txt-center p-b-27">Online Ordering Done Right.</h1>
          <p style={{lineHeight: '30.6px'}} className="fs-18 txt-center">
            Inhouse Orders is a simple, easy-to-use online ordering platform
            built to maximize revenue retention, minimize hassle, and mobilize
            data & analytics for independent and family-owned restaurants.
          </p>
          <Box display="flex" justifyContent="center">
            <Button size="large" variant="contained" color="primary">
              Get Started
            </Button>{" "}
            <Button size="large" variant="outlined" color="secondary">
              How It Works
            </Button>{" "}
          </Box>
          <div className="triplet flex-w flex-c">
            <div className="triple">
              <h2 className="sans-bold tripleHead">SEO + MOBILE FRIENDLY</h2>
              <hr />
              <p className="txt-left m-t-8">
                We build websites optimized for Google search results and mobile
                devices. Your customers will be able to easily find you.{" "}
              </p>
            </div>
            <div className="triple">
              <h2 className="sans-bold tripleHead">ONLINE ORDERING</h2>
              <hr />
              <p className="txt-left m-t-8">
                Customers can easily view your menu and order online. We have a
                robust online ordering platform that allows you to receive
                orders however you like and customize your menu on the fly.
              </p>
            </div>
            <div className="triple">
              <h2 className="sans-bold tripleHead">CUSTOMER FEEDBACK</h2>
              <hr />
              <p className="txt-left m-t-8">
                We create a feedback loop so customers will be able to send
                feedback directly to you. When you receive positive reviews, we
                encourage them to post online.{" "}
              </p>
            </div>
          </div>

          <div className="m-auto m-t-16 m-b-16 flex-c">
            <Button color="secondary">
              <a href="https://demo.inhouseorders.io" target="_blamk">
                Hot Thai Demo
              </a>
            </Button>
          </div>
        </div>
      </>
    )
  }

  return <Layout>{getHome()}</Layout>
}

export default Home
