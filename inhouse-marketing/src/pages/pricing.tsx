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
  Button,
} from "@material-ui/core"
import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory"
import LocationOn from "@material-ui/icons/LocationOn"
import AccountBalance from "@material-ui/icons/AccountBalance"
import { Link } from "gatsby"

const pricing = () => {
  return (
    <Layout>
      <Box m="2rem" textAlign="center" mt="10rem">
        <h1 className="m-b-16 txt-normal">
          We keep your customers coming back.
        </h1>
        <p style={{ maxWidth: "600px", margin: "auto" }}>
          We take a low fee of 5% on the Subtotal + Tax. You keep 100% of the
          tips. You choose who pays the fee. We reccomend eating the fee to be
          keep customers coming back.{" "}
        </p>
      </Box>
      <Grid container spacing={2} style={{ maxWidth: "900px", margin: "auto" }}>
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
                border: "2px solid #666666",
                borderRadius: "50%",
              }}
            >
              <LocationOn style={{ fontSize: "3rem" }} />
            </Box>
            <h3 className="txt-lighter m-t-16">FREE</h3>
            <p className="txt-lighter m-t-16 m-b-16">
              This is good for restaurants who don't want to pay fees. The
              customer pays a 5% fee added to the total.{" "}
            </p>
            <Link to="/get-started">
              <Button size="small" variant="outlined" color="secondary">
                Get Started
              </Button>
            </Link>{" "}
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
                  border: "2px solid #666666",
                  borderRadius: "50%",
                }}
              >
                <StoreMallDirectory style={{ fontSize: "3rem" }} />
              </Box>
              <h3 className="txt-lighter m-t-16">5%</h3>
              <p className="txt-lighter m-t-16 m-b-16">
                The strategic choice - easy to beat other platforms who charge
                higher fees.{" "}
              </p>
              <Link to="/get-started">
                <Button size="small" variant="contained" color="primary">
                  Get Started
                </Button>
              </Link>{" "}
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
                border: "2px solid #666666",
                borderRadius: "50%",
              }}
            >
              <AccountBalance style={{ fontSize: "3rem" }} />
            </Box>
            <h3 className="txt-lighter m-t-16">Contact Us</h3>
            <p className="txt-lighter m-t-16 m-b-16">
              For restaurantuers or franchisees with multiple locations who want
              a completely custom ordering platform.{" "}
            </p>
            <p>
              With high ordering volume, we can offer a monthly per-location
              subscription. Contact us for more details
            </p>
            <Link to="/get-started">
              <Button size="small" variant="outlined" color="secondary">
                Get Started
              </Button>
            </Link>{" "}
          </div>
        </Grid>
      </Grid>
      <Box m="2rem" textAlign="center">
        <Box width="100%" maxWidth={700} mx="auto">
          <Card className="w-100 m-b-16">
            <CardContent className="txt-left">
              <h1 className="m-b-16 txt-normal txt-center">Setup Cost</h1>
              <p>
                Every restaurant has different setup requirements. The minimum
                requirement is a tablet to view/edit orders. When you purchase
                our supported tablet, we'll set it up for you. If you don't want
                another tablet, you can use your own personal tablet, computer
                or mobile device.{" "}
              </p>
              <p>
                Faxing orders is available at no additional cost. Our
                reccomended printing solution is our receipt printer which does
                not require a tablet.{" "}
              </p>
              <h3 className="lineItem">
                Receipt Printer: $250 <small>(Not needed for fax)</small>
              </h3>
              <h3 className="lineItem">Tablet: $150</h3>
              <h3 className="lineItem">Onsite Setup: $100</h3>
              <Divider></Divider>
              <h3 className="lineItem">Total: $0 - $500</h3>

            </CardContent>
          </Card>
        </Box>
      </Box>{" "}
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
            <CardContent>
              <h3>
                Custom APP
                <span style={{ fontFamily: "made_evolve_sans_light" }}>
                  {" | "} $2000
                </span>
              </h3>

              <p>A custom app that your regular customers will love. </p>
            </CardContent>
          </Card>

          <Card className="w-100 m-b-16">
            <CardContent>
              <h3>
                Onsite Tech Support
                <span style={{ fontFamily: "made_evolve_sans_light" }}>
                  {" | "} $75/hour
                </span>
              </h3>
              <p>
                We can help you with other technical support such as setting up
                a wireless network, printers, etc. Contact your rep for more
                details.{" "}
              </p>
            </CardContent>
          </Card>

          <Card className="w-100 m-b-16">
            <CardContent>
              <h3>
                Onsite Tech Support
                <span style={{ fontFamily: "made_evolve_sans_light" }}>
                  {" | "} Starting at $25
                </span>
              </h3>
              <p>
                So you have online ordering, but do your customers know about
                it?
              </p>
            </CardContent>
          </Card>
        </Box>
        <p>*Ask a rep for more details </p>
      </Box>{" "}
    </Layout>
  )
}

export default pricing
