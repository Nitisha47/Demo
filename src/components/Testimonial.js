import React from 'react';
import {Parallax} from 'react-parallax';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import stars from '../images/stars.png';

const Testimonial = () => {
  const testimonialData = [
     {
      image: pic1,
      star: stars,
      review:'4.5 Score, 9 Reviews',
     },
     {
      image: pic2,
      star: stars,
      review:'4.5 Score, 9 Reviews',
     },
     {
      image: pic3,
      star: stars,
      review:'4.5 Score, 9 Reviews',
     },
  ];

  return (
    <Parallax className='parallax' strength={800}>
      <div className='testimonial'>
        <div className='testimonial-top'>
            <h3>Trusted by thousands of users around the world</h3>
        </div>
        <div className='testimonial-bottom'>
            {testimonialData.map((data) =>(
              <div className='tbox'>
                <img src={data.image} alt='' />
                <div className='tbox-info'>
                    <img src={data.star} alt='' />
                    <p>{data.review}</p>
                </div>
              </div>
            ))}
        </div>
      </div>  
    </Parallax>
  );
};

export default Testimonial