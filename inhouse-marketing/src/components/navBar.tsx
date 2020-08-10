import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"

import { Box, Button, IconButton, Drawer, List } from "@material-ui/core"
import MonetizationOnRounded from "@material-ui/icons/MonetizationOnRounded"
import Autorenew from "@material-ui/icons/Autorenew"
import { Link } from "gatsby"
import Logo from "../images/inhouse_logo_dark.png"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import ListItemLink, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = "100%"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (anchor: string, newopen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setOpen(newopen)
  }

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
      flatLinks: {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
        [theme.breakpoints.up("sm")]: {
          display: "block",
        },
      },
    })
  )
  const classes = useStyles()

  return (
    <AppBar color="transparent" elevation={0} position="relative">
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link to="/">
            <img
              width="200px"
              src={Logo}
              alt="Inhouse Orders Logo"
              style={{ margin: ".75rem 0" }}
            />
          </Link>

          <Box className={classes.flatLinks}>
            <Link to="/pricing">
              <Button color="primary" startIcon={<MonetizationOnRounded />}>
                Pricing
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button color="primary" startIcon={<Autorenew />}>
                How It Works
              </Button>
            </Link>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer("right", true)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer("right", false)}
      >
        <List component="nav" aria-label="main mailbox folders">
          <ListItemLink button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItemLink>
          <ListItemLink button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemLink>
        </List>
      </Drawer>
    </AppBar>
  )
}
