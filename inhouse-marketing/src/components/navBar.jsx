import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import { Button, Box } from "@material-ui/core"
import MonetizationOnRounded from "@material-ui/icons/MonetizationOnRounded"
import Autorenew from "@material-ui/icons/Autorenew"
import { Link } from "gatsby"
import { signOut } from "../firebase/firebaseService"
import {UserStateContext} from "./layout"
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
  const [open, setOpen] = useState(false)
  const user = useContext(UserStateContext)
  console.log(user)
  const handleClick = e => {
    setOpen(!open)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const renderButtons = () => {
    return (
    <>
      {user? (
      <>
      <Button onClick={signOut}>Sign Out</Button>
      </>)
     : null}
    </>
    )
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navBar}>
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
        <span style={{ display: "flex", alignItems: "center" }}>
            <Link to="/pricing">
              <Button startIcon={<MonetizationOnRounded />}>Pricing</Button>
            </Link>
            <Link to="/how-it-works">
              <Button startIcon={<Autorenew />}>How It Works</Button>
            </Link>
            {renderButtons()}
            <Button><Link to="/dashboard">Dashboard</Link></Button> 
            <MenuIcon onClick={e => handleClick(e)} />
        </span>
      </Box>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        anchor="top"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={handleDrawerClose}
      >
        <List>
          <Link to="/" className={classes.link}>
            <ListItem button divider>
              <ListItemText primary="Home"></ListItemText>
            </ListItem>
          </Link>
          
          <Link to="/how-it-works" className={classes.link}>
            <ListItem button divider>
              <ListItemText primary="How it works"></ListItemText>
            </ListItem>
          </Link>

          <Link to="/pricing" className={classes.link}>
            <ListItem button divider>
              <ListItemText primary="Pricing"></ListItemText>
            </ListItem>
          </Link>
          <Link to="/get-started">
            <ListItem button divider>
              <ListItemText primary="Get started" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
  </AppBar>

  )
}
