import React from 'react';
import { Parallax } from 'react-parallax';
import plugin1 from '../images/plugin1.png';
import plugin2 from '../images/plugin2.png';
import plugin3 from '../images/plugin3.png';



const Plugins = () => {
  const pluginsData = [
    {
     image: plugin1,
     title: 'Light Weight',
      desc:'Motion Art for Elementor is designed to be lightweight.',
    },
    {
     image: plugin2,
     title: '100% Responsive',
     desc:'Create a consistent visual experience across all devices.',
    },
    {
     image: plugin3,
     title: 'User Friendly Interface',
     desc:'Ensure a smooth experience for both applicants and administrators.',
    },
 ];
  return (
    <Parallax className='parallax' strength={800}>
      <div className='plugins'>
        <div className='plugins-top'>
          <h6>An All-Round Plugin With Powerful</h6> 
          <h6>Features</h6>
          <p>Whether you're a seasoned web designer or just starting out, <br /> Motion Art for Elementor seamlessly integrates with the <br />Elementor platform, providing you with a seamless and intuitive <br />experience.</p>
        </div>
        <div className='plugins-bottom'>
        {pluginsData.map((data) =>(
              <div className='card-plugin' >
                    <img src={data.image} alt='' />
                    <div className='pbox-info'>
                        <div>{data.title}</div>
                        <p>{data.desc}</p>
                    </div>
              </div>
            ))}
        </div>
      </div>
    </Parallax>
  )
}

export default Plugins