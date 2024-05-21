import React from 'react';
import { Parallax } from 'react-parallax';


const Home = () => {
  return (
  <Parallax className='parallax' strength={800}>
    <div className='home-container'>
        <div className='home-left'>
          <p><span>Transform <br />Your Website </span><br /><br /> With Motion <br />Art Effect</p>
        </div>
        <div className='home-right'>
          <div className='home-right-top'>
            Attract Your Visitors <br />Attention With Colorful <br /><span>Motion Art Effect</span>
          </div>
          <div className='home-right-bottom'>
          Unleash the power of creativity with Motion Art for Elementor - your ultimate solution <br />for seamlessly integrating captivating animations into your website. 
          </div>
        </div>
    </div>
  </Parallax>
 
)};

export default Home