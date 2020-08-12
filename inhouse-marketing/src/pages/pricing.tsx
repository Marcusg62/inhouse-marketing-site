import React from "react"
import Layout from "../components/layout"
import "../components/style/pricing.css"
import {
  Card,
  Box,
  CardContent,
  Divider,
  CardMedia,
  Grid,
} from "@material-ui/core"
import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory"
import LocationOn from "@material-ui/icons/LocationOn"
import AccountBalance from "@material-ui/icons/AccountBalance"
// import CustomAppImg from "../images/custom app.jpeg"

const pricing = () => {
  return (
    <Layout>
      <Box m="2rem" textAlign="center" mt="10rem">
        <h1 className="m-b-16 txt-normal">
          We keep your customers coming back. 
        </h1>
        <p style={{maxWidth: "600px", margin: "auto"}}>
          We take a low fee of 5% on the Subtotal + Tax. You keep 100% of the tips. You choose who pays the fee. We reccomend eating the fee to be keep customers coming back. {" "}
        </p>
      </Box>
      <Grid container spacing={2} style={{maxWidth: "900px", margin: "auto"}}>
        <Grid item xs={12} md={4}>
          <div className="txt-center p-16">
            <p className="m-b-16">Saver</p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              style={{
                width: "5rem", 
                height: "5rem",
                border: "2px solid #ddd",
                borderRadius: "50%",
              }}
            >
              <LocationOn style={{ fontSize: "3rem" }} />
            </Box>
            <h3 className="txt-lighter m-t-16">FREE</h3>
            <p className="txt-lighter m-t-16">
              This is good for restaurants who don't want to pay fees. The
              customer pays a 5% fee added to the total.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent className="txt-center">
              <p className="m-b-16">Reccomended</p>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                style={{
                  width: "5rem",
                  height: "5rem",
                  border: "2px solid #ddd",
                  borderRadius: "50%",
                }}
              >
                <StoreMallDirectory style={{ fontSize: "3rem" }} />
              </Box>
              <h3 className="txt-lighter m-t-16">5%</h3>
              <p className="txt-lighter m-t-16">
                The strategic choice - easy to beat other platforms
                who charge higher fees. {" "}
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="txt-center p-16">
            <p className="m-b-16">Restaurateur</p>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx="auto"
              style={{
                width: "5rem",
                height: "5rem",
                border: "2px solid #ddd",
                borderRadius: "50%",
              }}
            >
              <AccountBalance style={{ fontSize: "3rem" }} />
            </Box>
            <h3 className="txt-lighter m-t-16">Contact Us</h3>
            <p className="txt-lighter m-t-16">
              For restaurantuers or franchisees with multiple locations who want
              a completely custom ordering platform.{" "}
            </p>
            <p>
              With high ordering volume, we can offer a monthly per-location
              subscription. Contact us for more details
            </p>
          </div>
        </Grid>
      </Grid>
      <Box m="2rem" textAlign="center">
        <Box width="100%" maxWidth={700} mx="auto">
          <Card className="w-100 m-b-16">
            <CardContent className="txt-left">
              <h1 className="m-b-16 txt-normal txt-center">What's included?</h1>
              <h3>Online Ordering</h3>
              <li>Contactless Ordering & Payment</li>
              <li>Daily Payouts</li> 
 
              <h3 className="m-t-16">Free Website & Domain</h3>
              <li>SEO (Search Engine Optimization)</li>
              <li>Mobile Friendly</li>
              <li>No annual renewal fees</li>
              <li>Branded and customizable</li>
              <li>Free SSL certificate</li>

              <h3 className="m-t-16">Online Presence</h3>
              <li>Free Account Verification on Google, Yelp, etc. </li>
              <li>Update & Maintain Hours, Prices, etc</li>
              <li>Top Ranking On Google</li>

              <h3 className="m-t-16">Account Specialist</h3>
              <li>
                We'll match you with an advisor who speaks your language and
                knows the industry.
              </li>
              <li>24/7 access to your advisor</li>
              <li>No outsourced support in other countries</li>

              <h3 className="m-t-16">On-Site Support</h3>
              <li>Free On-Site Setup and Consultation</li>
              <li>Receipt Printing Setup (upon printer purchase)</li>
            </CardContent> 
          </Card>
        </Box>
      </Box>{" "}
      <Divider></Divider>
      <Box m="2rem" textAlign="center">
        <h1 className="m-b-16 txt-normal">Add Ons</h1>
        <p>These add ons will help you get more customers order online. </p>
        <Box width="100%" maxWidth={700} mx="auto">
          <Card className="w-100 m-b-16">
            {/* <CardMedia
            style={{height: "150px", width: "150px", display: "inline-block", margin: "0px"}}
              image="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-90538-social-media-mobile-icons-snapchat-facebook-instagram-ss-1920--2x1--940.jpg"
              title="A customer holding a smartphone ordering food with a custom built app."
            /> */}
            <CardContent>
              <h3>Custom App</h3>
              <p>$2000</p>
              <p>A custom app that your regular customers will love. </p>
            </CardContent>
          </Card>

          <Card className="w-100 m-b-16">
            <CardContent>
              <h3>Printed Marketing</h3>
              <p>Starting at $25</p>
              <p>
                So you have online ordering, but do your customers know about
                it?
              </p>
            </CardContent>
          </Card>

          <Card className="w-100 m-b-16">
            <CardContent>
              <h3>Receipt Printer</h3>
              <p>$250* price may vary</p>
              <p>Reccomended printing solution. </p>
            </CardContent>
          </Card>
        </Box>
        <p>*Ask a rep for more details </p>
      </Box>{" "}
    </Layout>
  )
}

export default pricing
