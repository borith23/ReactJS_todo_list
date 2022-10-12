import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles({
mainMenu: {
   backgroundColor:'blue',
   padding:'10px',
   marginTop:'0px',
},
buttonItem: {
    color:'white',
    marginRight:'30px',
    cursor:'pointer'
}
})
export default function Header() {
const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const onComputer = () => {
    navigate("/computer");
  };
  const onWatch = () => {
    navigate("/watch");
  };
  const onPhone = () => {
    navigate("/phone");
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <Box className={classes.mainMenu}>
      <Link href="/home" aria-controls="simple-menu" aria-haspopup="true" className={classes.buttonItem} 
      >
        HOME
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onComputer}>Computer</MenuItem>
        <MenuItem onClick={onPhone}>Phone</MenuItem>
        <MenuItem onClick={onWatch}>Watch</MenuItem>
      </Menu>
    </Box>
    </>
  );
}