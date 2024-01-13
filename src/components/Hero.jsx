import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Hero() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    centerPadding: '60px',
  };

  return (
    <>
      <div className='h-[60vh] justify-start flex sm:justify-end flex-col gap-20'>
          <div className='flex flex-col justify-end gap-5 sm:pt-48 -pt-20 sm:pl-20 pl-10'>
            <p className='text-white font-lato text-xl'>Hey, I am </p>
            <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-medium font-lemon'>Shivansh Sood</h1>
            <p className='text-white md:w-[70%] w-[97%] md:text-2xl text-xl font-normal font-lato'> a passionate Full-Stack Developer, dedicated about creating innovative and user-friendly web solutions.</p>
          </div>
          <div className='text-white flex sm:hidden h-[40vh] overflow-hidden'>
            <div className=''>
              <Slider {...settings} className='w-[800px]'>
                <div>
                  <div className='glass h-20 w-48 m-10'>
                    1
                  </div>
                </div>
                <div>
                  <div className='glass h-20 w-48 m-10'>
                    2
                  </div>
                </div>
                <div>
                  <div className='glass h-20 w-48 m-10'>
                    3
                  </div>
                </div>
                <div>
                  <div className='glass h-20 w-48 m-10'>
                    4
                  </div>
                </div>
              </Slider>
            </div>
        </div>
      </div>
      <div className='hidden sm:flex items-center h-[40vh] w-full justify-around pr-24 pl-24'>
            <div className='glass h-28 w-72'>
              
            </div>
            <div className='glass h-28 w-72'>
              
            </div>
            <div className='glass h-28 w-72'>
              
            </div>
            <div className='glass h-28 w-72'>
              
            </div>
        </div>
    </>
  );
}

export default Hero;
