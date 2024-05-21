import React from 'react';
import { Parallax } from 'react-parallax';
import social from '../images/social.png';

const Socials = () => {
  return (
    <Parallax className='parallax' strength={800}>
        <div className='socials'>
           <div className='card'>
              <h3>Supported by All Popular Browsers</h3>
              <p>Rest assured, Motion Art is designed to be compatible</p>
              <p>with all major web browsers.</p>
              <div className='social-img'><img src={social} alt='' /></div>
           </div>
        </div>
    </Parallax>
  )
}

export default Socials