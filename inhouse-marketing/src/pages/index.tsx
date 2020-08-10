import React from "react"
import Layout from "../components/layout"
import "../components/style/home.css"
import { Button, Box, Typography, Grid } from "@material-ui/core"
import Product from "../images/inhouse_product.png"

const Home = () => {
  const getHome = () => {
    return (
      <Box mt="8rem">
        <Box style={{ maxWidth: "1500px", marginLeft: "auto" }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <div className="p-t-100 p-l-16 p-b-8">
                <Typography
                  color="primary"
                  className="txt-bold"
                  variant="h1"
                  component="h1"
                >
                  Online Ordering
                </Typography>{" "}
                <Typography
                  className="txt-bold"
                  variant="h1"
                  component="h1"
                  gutterBottom
                  color="secondary"
                >
                  Done Right.
                </Typography>{" "}
                <p style={{ lineHeight: "25.6px", maxWidth: "500px" }}>
                  Inhouse Orders is a simple, easy-to-use online ordering
                  platform built to maximize revenue retention, minimize hassle,
                  and mobilize data & analytics for independent and family-owned
                  restaurants.
                </p>
                <Box display="flex" justifyContent="left" mt="1rem" mb="1rem">
                  <Button
                    style={{ marginRight: "8px" }}
                    size="large"
                    variant="contained"
                    color="primary"
                  >
                    Get Started
                  </Button>{" "}
                  <Button size="large" variant="outlined" color="secondary">
                    How It Works
                  </Button>{" "}
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={Product}
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  display: "block",
                  marginLeft: "auto",
                }}
                alt="Demo Screenshot of Online Ordering"
              />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ maxWidth: "1000px", margin: "auto", padding: "1rem" }}>
          <Grid container spacing={4}> 
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">SEO + MOBILE FRIENDLY</h2>
              <hr />
              <p className="txt-left m-t-8">
                We build websites optimized for Google search results and mobile
                devices. Your customers will be able to easily find you.{" "}
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">ONLINE ORDERING</h2>
              <hr />
              <p className="txt-left m-t-8">
                Customers can easily view your menu and order online. We have a
                robust online ordering platform that allows you to receive
                orders however you like and customize your menu on the fly.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">CUSTOMER FEEDBACK</h2>
              <hr />
              <p className="txt-left m-t-8">
                We create a feedback loop so customers will be able to send
                feedback directly to you. When you receive positive reviews, we
                encourage them to post online.{" "}
              </p>
            </Grid>
          </Grid>

          <Grid className="m-auto m-t-16 m-b-16 flex-c">
            <Button color="secondary">
              <a href="https://demo.inhouseorders.io" target="_blamk">
                Hot Thai Demo
              </a>
            </Button>
          </Grid>
        </Box>
      </Box>
    )
  }

  return <Layout>{getHome()}</Layout>
}

export default Home
