import React from "react"
import Layout from "../components/layout"
import "../components/style/home.css"
import { Button, Box, Typography, Grid } from "@material-ui/core"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

const Home = (props) => {
  const getHome = data => {
    return (
      <Box>
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
                  <Link to="/get-started">
                    <Button
                      style={{ marginRight: "8px" }}
                      size="large"
                      variant="contained"
                      color="primary"
                    >
                      Get Started
                    </Button>{" "}
                  </Link>
                  <Link to="/how-it-works">
                    <Button size="large" variant="outlined" color="secondary">
                      How It Works
                    </Button>
                  </Link>{" "}
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={6}> 
              <Img fluid={data.file.childImageSharp.fluid} />
            </Grid>
          </Grid>
        </Box>
        <Box style={{ maxWidth: "1000px", margin: "auto", padding: "1rem" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">
                Maximize Revenue Retention
              </h2>
              <hr />
              <p className="txt-left m-t-8">
                The IO Platform was built for revenue retention. Stop paying
                20-30% for <i>marketing fees.</i> We have pricing options that
                will keep customers coming back and allow you to keep your
                profit.{" "}
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">Minimize Hassle</h2>
              <hr />
              <p className="txt-left m-t-8">
                We take care of the tech, you take care of the food. Our
                solution is built for restaurants first. From a variety of
                printing options to customized reporting, we're here to make
                running your business easy.
              </p>
            </Grid>
            <Grid item xs={12} sm={4}>
              <h2 className="sans-bold tripleHead">Mobilize Data</h2>
              <hr />
              <p className="txt-left m-t-8">
                When you sign up, we'll match you with an account specialist who
                speaks your language and knows your industry. They will monitor
                your business performance and make changes as needed to maximize
                revenue.{" "}
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

  return <Layout>{getHome(props.data)}</Layout>
}

export const query = graphql`
  query {
    file(relativePath: { eq: "inhouse_product.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
export default Home
