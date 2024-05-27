import React from 'react';
import { Parallax } from 'react-parallax';
import magic from '../images/magic.png';
import { Button } from '@mui/material';
import { styled } from '@mui/material';

const Purchase = () => {
  const PurchaseButton = styled(Button)({
    background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
    border: 0,
    borderRadius: 25,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 55,
    width:'45%',
    padding: '0 30px',
    });
  return (
    <Parallax className='parallax' strength={800}>
      <div className='purchase'>
        <div className='purchase-left'>
          <h3>Turn Your Cursor Into A Colorful Magic <br/> Wand & Charm Your Visitors</h3>
          <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse <br />your website with visually stunning motion art elements.</p>
          <PurchaseButton className='pbutton'>Purchase from evanto</PurchaseButton>
        </div>
        <div className='purchase-right'>
          <img src={magic} alt='' />
        </div>
      </div>
    </Parallax>
  )
}

export default Purchase