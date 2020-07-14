import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem"
import { Menu } from '@material-ui/core';
import { Link } from "gatsby"

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

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Inhouse Orders
        </Typography>
        <IconButton edge="false" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon onClick={(e)=>handleClick(e)}/>
        </IconButton>
        <Menu
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
