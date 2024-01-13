import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/photos/1.PNG'
import img2 from '../assets/photos/2.png'
import img3 from '../assets/photos/3.png'
import img4 from '../assets/photos/4.png'

function Hero() {

  return (
    <>
      <div className='h-[60vh] sm:justify-end justify-start flex flex-col'>
          <div className='flex flex-col justify-end gap-5 sm:pt-48 -pt-20 sm:pl-20 pl-10'>
              <p className='text-white font-lato text-xl'>Hey, I am </p>
              <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-medium font-lemon'>Shivansh Sood</h1>
              <p className='text-white md:w-[70%] w-[97%] md:text-2xl text-xl font-normal font-lato'> a passionate Full-Stack Developer, dedicated about creating innovative and user-friendly web solutions.</p>
          </div>
      </div>
      <div className='w-full flex flex-col justify-center items-start'>
        <div className='w-full sm:p-20 p-10 flex flex-col gap-10'>
          <div><h1 className='text-white font-pacifico text-4xl'>Highlights</h1></div>
          <div className='glass w-full'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:pr-20 pr-10 md:pl-20 pl-10'>
              <div className='flex items-center justify-around gap-5 h-28'>
                <img className='w-32 h-24 rounded-xl' src={img1} alt='1'></img>
                <div className='flex text-white font-lato flex-col gap-2'>
                  <p>Chemiteck.in | Valves and Innovation</p>
                  <p>From projects</p>
                </div>
              </div>
              <div className='flex items-center justify-around gap-5 h-28'>
                <img className='w-32 h-24 rounded-xl' src={img2} alt='1'></img>
                <div className='flex text-white font-lato flex-col gap-2'>
                  <p>Global Chat | Chat around the globe</p>
                  <p>From projects</p>
                </div>
              </div>
              <div className='flex items-center justify-around gap-5 h-28'>
                <img className='w-32 h-24 rounded-xl' src={img3} alt='1'></img>
                <div className='flex text-white font-lato flex-col gap-2'>
                  <p>Estate Landing Page | Bring your buisness to a next level</p>
                  <p>From projects</p>
                </div>
              </div>
              <div className='flex items-center justify-around gap-5 h-28'>
                <img className='w-32 h-24 rounded-xl' src={img4} alt='1'></img>
                <div className='flex text-white font-lato flex-col gap-2'>
                  <p>Workout Buddy | Your buddy for every workout</p>
                  <p>From projects</p>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
