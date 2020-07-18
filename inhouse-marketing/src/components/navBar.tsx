import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem"
import {Drawer, List, ListItem, Grid } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from "gatsby"


const drawerWidth = "100%"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#e8eaf6",
    color: "black"
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
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  navBar: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const handleClick = (e) =>{
    setOpen(!open)
  }
  const handleDrawerClose = () =>{
    setOpen(false)
  }

  return (
    <AppBar position="static"  className={classes.root}>
      <Toolbar className={classes.navBar}>
        
            <Typography variant="h5">
              <Link to="/">Inhouse Orders</Link>
            </Typography>


              <MenuIcon onClick={(e)=>handleClick(e)}/>


      </Toolbar>

      <Drawer
            className={classes.drawer}
            anchor="top"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
        >
          <div >
            <IconButton onClick={handleDrawerClose}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </div>
          <List>
            <ListItem><Link to="/"><MenuItem>Home</MenuItem></Link></ListItem>
            <ListItem><Link to="/process"><MenuItem>How it works</MenuItem></Link></ListItem>
            <ListItem><Link to="/pricing"><MenuItem>Pricing</MenuItem></Link></ListItem>
            <ListItem><Link to="/getStarted"><MenuItem>Get started</MenuItem></Link></ListItem>
          </List>
       </Drawer>
    </AppBar>
  );
}
