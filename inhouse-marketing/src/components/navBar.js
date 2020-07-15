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
  title
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
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container
          justify="space-between"
        >
          <Grid item xs={10}>
            <Typography variant="h5" className={classes.title}>
              Inhouse Orders
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <IconButton edge="false" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon onClick={(e)=>handleClick(e)}/>
            </IconButton>
          </Grid>
        </Grid>
        <Drawer
            className={classes.drawer}
            variant="persistent"
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
      </Toolbar>
    </AppBar>
  );
}
