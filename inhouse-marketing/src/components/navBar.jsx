import React, { useState, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer, List, ListItem, Button, ListItemText } from "@material-ui/core"
import MonetizationOnRounded from "@material-ui/icons/MonetizationOnRounded"
import Autorenew from "@material-ui/icons/Autorenew"
import { Link } from "gatsby"
import { signOut } from "../firebase/firebaseService"
import {UserStateContext} from "./layout"


const drawerWidth = "100%"
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: "#ffffff",
    color: "black",
    justifyContent: "space-between",
    alignContent: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  modal: {
    paddingTop: "50px",
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

  const renderMenu = () => {
    return (
    <>
      <Button>Sign In</Button>
      <Button onClick={signOut}>Sign Out</Button>
      <Button>My profile</Button>
      <MenuIcon onClick={e => handleClick(e)} />
    </>
    )
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navBar}>
        <Link to="/" className={classes.link}>
          Inhouse Orders
        </Link>          
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/pricing">
            <Button startIcon={<MonetizationOnRounded />}>Pricing</Button>
          </Link>
          <Link to="/how-it-works">
            <Button startIcon={<Autorenew />}>How It Works</Button>
          </Link>
        {renderMenu()}
        </div>
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
