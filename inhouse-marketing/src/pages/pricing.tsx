import React from "react"
import Layout from "../components/layout"
import "../components/style/pricing.css"
import { Card, Box, CardContent, Divider, CardMedia } from "@material-ui/core"
import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory"
import LocationOn from "@material-ui/icons/LocationOn"
import AccountBalance from "@material-ui/icons/AccountBalance"
import CustomAppImg from "../images/custom app.jpeg"

const pricing = () => {
  return (
    <Layout>
      <Box m="2rem" textAlign="center" mt="10rem">
        <h1 className="m-b-16 txt-normal">
          Pricing that works for your restaurant
        </h1>
        <p>
          We want to keep customers coming back. That's why we have a low fee of
          5%. We also let you choose who pays the fee.{" "}
        </p>
      </Box>
      <Box p="2rem" display="flex" justifyContent="center" flexWrap="wrap">
        <Box minWidth={100} width="100%" maxWidth={200} px="5px">
          <Card variant="outlined">
            <CardContent className="txt-center">
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
            </CardContent>
          </Card>
        </Box>
        <Box minWidth={100} width="100%" maxWidth={200} px="5px">
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
                This is good for restaurants who want to beat other platforms
                who charge higher fees and have customers keep coming back.{" "}
              </p>
              <p>Restaurants who choose this option get 25% more orders*</p>
            </CardContent>
          </Card>
        </Box>
        <Box minWidth={100} width="100%" maxWidth={200} px="5px">
          <Card variant="outlined">
            <CardContent className="txt-center">
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
                For restaurantuers or franchisees with multiple locations who
                want a completely custom ordering platform.{" "}
              </p>
              <p>
                With high ordering volume, we can offer a monthly per-location
                subscription. Contact us for more details
              </p>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Divider></Divider>
      <Box m="2rem" textAlign="center">
        <h1 className="m-b-16 txt-normal">Add Ons</h1>
        <p>These add ons will help you get more customers order online. </p>
        <Box width="100%" maxWidth={700} mx="auto">
          <Card className="w-100 m-b-16">
            <CardMedia
            style={{height: "150px", width: "150px", display: "inline-block", margin: "0px"}}
              image="https://media-assets-03.thedrum.com/cache/images/thedrum-prod/s3-news-tmp-90538-social-media-mobile-icons-snapchat-facebook-instagram-ss-1920--2x1--940.jpg"
              title="A customer holding a smartphone ordering food with a custom built app."
            />
            <CardContent>
              <h3>Custom App</h3>
              <p>A custom app that your regular customers will love. </p>
            </CardContent>
          </Card>

          <Card className="w-100">
            <CardContent>
              <h3>Marketing</h3>
              <p>
                So you have online ordering, but do your customers know about
                it?
              </p>
            </CardContent>
          </Card>

          <Card className="w-100">
            <CardContent>
              <h3>Receipt Printer</h3>
              <p>
                You can enter orders into your POS or just get the receipt
                printed.{" "}
              </p>
            </CardContent>
          </Card>
        </Box>
      </Box>{" "}
    </Layout>
  )
}

export default pricing
