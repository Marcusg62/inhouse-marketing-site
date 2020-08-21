import React from "react"
import Layout from "../components/layout"
import Timeline from "../components/timeline"
import { Divider, Box, Card, CardContent } from "@material-ui/core"

const process = () => {
  const renderProcess = () => {
    return (
      <Box margin="1rem">
        <h1 className="m-t-20 ">How It Works</h1>
        <Box my="1rem">
          <Divider></Divider>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Box width="100%" maxWidth="400px">
            <Timeline></Timeline>
          </Box>
          <Box width="100%" maxWidth="400px" pt="1rem">
          </Box>
        </Box>

        <h2 className="m-t-20 fs-36">FAQ - Frequently Asked Questions</h2>
        <hr className="" />
        <div
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
          className="p-l-16 m-t-16"
        >
          <h3 itemProp="name" className="fs-22">
            How do I get paid?{" "}
          </h3>
          <div
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              <p>
                When customers order online, you will receive funds directly
                from Stripe into your bank account. Be sure that your Bank
                Account info is up to date in your Stripe Dashboard. Balances
                are deposited two business days after the transaction.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
          className="p-l-16 m-t-16"
        >
          <h3 itemProp="name" className="fs-22">
            What happens to my domain name?{" "}
          </h3>
          <div
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              <p>
                If you already have a website, we will transfer your domain to
                our registrar so that we can update your website. We'll take
                care of any fees associated with domain name registration. If
                you don't have a website, we'll purchase a domain for you.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
          className="p-l-16 m-t-16"
        >
          <h3 itemProp="name" className="fs-22">
            How do I contact support?{" "}
          </h3>
          <div
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div itemProp="text">
              <p>
                We will match you with a Inhouse Representative who speaks
                English. If you experience any technical difficulties, you can
                contact your representative and they will take care of your
                issue ASAP.{" "}
              </p>
            </div>
          </div>
        </div>
      </Box>
    )
  }

  return <Layout>{renderProcess()}</Layout>
}

export default process
