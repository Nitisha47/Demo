import React from 'react';
import logo from '../images/logo.png';
import Button from "@mui/material/Button";
import { styled } from '@mui/material';

const Navbar = () => {
  const TopButton = styled(Button)({
    backgroundColor: 'white',
    border: 0 ,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      backgroundColor: 'black',
      boxShadow: 'none',
      border:'3px solid white',
      color:'white',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3c52b2',
    },
});
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={logo} alt="" />
      </div>
      <TopButton className='top-button'>Purchase</TopButton> 
    </nav>
  )
}

export default Navbar