import React from 'react';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import '../styles/styles.css';

function Services() {

    useEffect(()=> {
      Aos.init({duration: 1500})
  }, [])

  return (
    <div data-aos="fade-up" className="Services">

        <h1 className=' text-center'>Services</h1>
      <div data-aos="fade-up" className='container'>
        <div className='contain'>content 1</div>
        <div className='contain'>content 2</div>
        <div className='contain'>content 3</div>
      </div>
    </div>
  );
}

export default Services;
