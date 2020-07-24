import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { Drawer, List, ListItem, Button } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { Link } from "gatsby"
import { signOut } from "../firebase/firebaseService"
// import Button from "material-dashboard-pro-react-v1.9.0/src/components/CustomButtons/Button"

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
  const handleClick = e => {
    setOpen(!open)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.navBar}>
        <Link to="/" className={classes.link}>
          Inhouse Orders
        </Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button>Sign In</Button>
          <Button onClick={signOut}>Sign Out</Button>
          <Button>My profile</Button>
          <MenuIcon onClick={e => handleClick(e)} />
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
          <ListItem>
            <Link to="/" className={classes.link}>
              <MenuItem>Home</MenuItem>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/process" className={classes.link}>
              <MenuItem>How it works</MenuItem>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/pricing" className={classes.link}>
              <MenuItem>Pricing</MenuItem>
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/getStarted" className={classes.link}>
              <MenuItem>Get started</MenuItem>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
