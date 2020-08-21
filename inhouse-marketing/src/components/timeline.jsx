import React from "react"
import { Button, Chip } from "@material-ui/core"
import Timeline from "@material-ui/lab/Timeline"
import TimelineItem from "@material-ui/lab/TimelineItem"
import TimelineSeparator from "@material-ui/lab/TimelineSeparator"
import TimelineConnector from "@material-ui/lab/TimelineConnector"
import TimelineContent from "@material-ui/lab/TimelineContent"
import TimelineDot from "@material-ui/lab/TimelineDot"
import ContactMail from "@material-ui/icons/ContactMail"
import Favorite from "@material-ui/icons/Favorite"
import RestaurantMenu from "@material-ui/icons/RestaurantMenu"
import StoreMallDirectory from "@material-ui/icons/StoreMallDirectory"
import Paper from "@material-ui/core/Paper"
import "./style/timeline.css"
import {Link} from 'gatsby';

export default function CustomizedTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ContactMail />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className="callout right">
            <Chip size="small" label="GET STARTED" color="primary" />
            <p>Give us your info so we can start the process. </p>
            <Link to="/get-started">
              <Button size="small" color="primary">
                Get Started
              </Button>
            </Link>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <Favorite />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className="callout right">
            <h3 className="txt-normal">Advisor Match</h3>
            <p>
              We'll review your information and match you with an advisor. They
              will contact you to review your needs and create a customized plan
              to handle your online presence.{" "}
            </p>
            <Link to="/get-started">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RestaurantMenu />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={0} className="callout right">
            <h3 className="txt-normal">Menu Upload</h3>
            <p>
              Your advisor will start uploading your menu and contact you to
              inquire about modifiers, times and details about your menu.{" "}
            </p>
            <Link to="/get-started">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <StoreMallDirectory />
          </TimelineDot>
          <TimelineConnector></TimelineConnector>
        </TimelineSeparator>

        <TimelineContent>
          <Paper elevation={0} className="callout right">
            <h3 className="txt-normal">On-Site Consultation</h3>
            <p>
              Your advisor will visit your restaurant to help you complete
              onboarding and payment processing forms. We will also get more
              information about your printing needs and online presence.{" "}
            </p>
            <Link to="/get-started">
              <Button size="small" color="primary">
                Learn More
              </Button>
            </Link>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
