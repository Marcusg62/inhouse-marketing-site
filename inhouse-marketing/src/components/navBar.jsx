import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import { Button, Box } from "@material-ui/core"
import MonetizationOnRounded from "@material-ui/icons/MonetizationOnRounded"
import Autorenew from "@material-ui/icons/Autorenew"
import { Link } from "gatsby"
import { signOut } from "../firebase/firebaseService"
import logo from "../images/inhouse_logo.png"
// import Button from "material-dashboard-pro-react-v1.9.0/src/components/CustomButtons/Button"

const drawerWidth = "100%"
const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
  },
}))

export default function NavBar() {
  const classes = useStyles()

  return (
    <Box
      bgcolor="primary.main"
      component="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/" className={classes.link}>
        <img
          width="200px"
          src={logo}
          alt="Inhouse Orders Logo"
          style={{ margin: "1rem", marginLeft: 0 }}
        />
      </Link>
      <span>
        <Link to="/pricing">
          <Button color="primary" startIcon={<MonetizationOnRounded />}>Pricing</Button>
        </Link>
        <Link to="/how-it-works">
          <Button startIcon={<Autorenew />}>How It Works</Button>
        </Link>
      </span>
    </Box>
  )
}
