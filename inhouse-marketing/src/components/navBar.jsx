import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer, List, ListItem, Button, ListItemText } from "@material-ui/core"
import MonetizationOnRounded from "@material-ui/icons/MonetizationOnRounded"
import Autorenew from "@material-ui/icons/Autorenew"
import { Link } from "gatsby"
import { signOut } from "../firebase/firebaseService"
// import Button from "material-dashboard-pro-react-v1.9.0/src/components/CustomButtons/Button"
import Logo from "../images/inhouse_logo.png"
const drawerWidth = "100%"

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const handleClick = e => {
    setOpen(!open)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <Link to="/">
          <img width="200px" src={Logo} alt="" />
        </Link>

        <Link to="/pricing">
          <Button startIcon={<MonetizationOnRounded />}>Pricing</Button>
        </Link>
        <Link to="/how-it-works">
          <Button startIcon={<Autorenew />}>How It Works</Button>
        </Link>
        {/* <MenuIcon onClick={e => handleClick(e)} /> */}
      </Toolbar>
    </AppBar>
  )
}
