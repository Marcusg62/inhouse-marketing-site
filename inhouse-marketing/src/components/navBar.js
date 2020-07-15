import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem"
import { Menu, Drawer, List, ListItem } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from "gatsby"


const drawerWidth = "100%"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e8eaf6",
    color: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (e) =>{
    setOpen(!open)
    setAnchorEl(document.querySelector('header'))
  }
  const handleMenuClose = () => {
    setOpen(!open)
    setAnchorEl(null)
  }

  const handleDrawerClose = () =>{
    setOpen(false)
  }

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Inhouse Orders
        </Typography>
        <IconButton edge="false" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={(e)=>handleClick(e)}/>
        </IconButton>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="top"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <ListItem><Link to="/"><MenuItem>Home</MenuItem></Link></ListItem>
          <ListItem><Link to="/process"><MenuItem>How it works</MenuItem></Link></ListItem>
          <ListItem><Link to="/pricing"><MenuItem>Pricing</MenuItem></Link></ListItem>
          <ListItem><Link to="/getStarted"><MenuItem>Get started</MenuItem></Link></ListItem>
        </List>
      </Drawer>
        {/* <Menu
          className={classes.menu}
          open={open}
          onClose={handleMenuClose}
          getContentAnchorEl={null}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          >
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <Link to="/process"><MenuItem>How it works</MenuItem></Link>
          <Link to="/pricing"><MenuItem>Pricing</MenuItem></Link>
          <Link to="/getStarted"><MenuItem>Get started</MenuItem></Link>
        </Menu> */}
      </Toolbar>
    </AppBar>
  );
}
