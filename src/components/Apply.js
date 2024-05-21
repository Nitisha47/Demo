import React from 'react';
import { Parallax } from 'react-parallax';
import card1 from '../images/card1.png';
import card2 from '../images/card2.png';

const Apply = () => {
  return (
    <Parallax className='parallax' strength={800}>
      <div className='apply'>
         <div className='apply-top'>
            <p>Apply On Any Section Or Enable For Whole Page</p>
         </div>
         <div className='apply-bottom'>
            <div className='c1'>
              <div className='c-upper'>
                <h3>Apply On Section</h3>
                <p>Apply on section is a game-changer, offering an <br /> unparalleled way to manage applications directly from<br /> your website. </p>
              </div>
              <div className='c-lower'>
                 <img src={card2} alt='' />  
              </div> 
            </div>
            <div className='c2'>
              <div className='c-upper'>
                <h3>Apply On Page</h3>
                <p>Apply on Page is a game-changer, offering an <br /> unparalleled way to manage applications directly from<br /> your website. </p>
              </div>
              <div className='c-lower'>
                 <img src={card1} alt='' />  
              </div> 
            </div>
         </div>
      </div>
    </Parallax>
  )
}

export default Apply