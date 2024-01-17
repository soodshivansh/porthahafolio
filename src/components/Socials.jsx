import React from 'react';
import img1 from '../assets/photos/github-mark-white.png'
import img2 from '../assets/photos/m001t0248_b_office_bag_20jul22-removebg-preview.png'
import img3 from '../assets/photos/ol15_ii19_230118-removebg-preview.png'
import FadeIn from '../Animation/FadeIn';

function Socials() {

  return (
    <>
      <div className=" text-gray-400 w-full h-[80vh] md:p-32 sm:p-10 p-2 mt-12 flex items-center sm:mb-0 font-genos lg:text-7xl sm:text-5xl text-3xl text-center">
        <h1>
          <span className="text-[#1974D2]">Navigating</span> the road of{" "}
          <span className="text-[#4D88FF]">innovation</span>, trying{" "}
          <span className="text-[#fba3ad]">new things</span>, and{" "}
          <span className="text-[#8287e0]">casually</span>{" "}
          <span className="text-[#8287e0]">strolling</span> towards{" "}
          <span className="text-white">coding perfection</span> – one{" "}
          <span className="text-[#00FF7F]">experiment</span> at a{" "}
          <span className="block">
            <span className="text-[#D4A017]">time</span>
            <i className="fa-solid ml-2 lg:text-5xl sm:text-3xl text-xl fa-clock"></i>
            .
          </span>
        </h1>
      </div>

      <div className="sm:pt-20 sm:pl-20 sm:pr-20 pt-10 pl-10 pr-10 flex flex-col gap-10">
        <h1 className="font-pacifico text-white text-4xl">Socials</h1>
        <div className="flex gap-10">
          <div className="glass w-full"></div>
        </div>
        <FadeIn>
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="flex flex-col text-center gap-2 text-white items-center justify-start glass w-full h-[40vh] overflow-hidden">
              <div className="mt-10">
                <p className="text-3xl font-genos font-semibold text-blue-800">
                  LinkedIn
                </p>
                <p className="pr-10 pl-10 text-gray-500 text-xl font-lato">
                  Here we go with our professional life. Although I dont post
                  but would like to connect
                </p>
              </div>
              <img className="h-40 w-56" src={img2} />
            </div>
            <div className="flex flex-col text-center gap-2 text-white items-center justify-start glass w-full h-[40vh] overflow-hidden">
              <div className="mt-10">
                <p
                  className="text-3xl font-genos font-semibold"
                  style={{
                    background: "linear-gradient(to right, #900af7, #fe016a)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Instagram
                </p>
                <p className="pr-10 pl-10 text-gray-500 text-lato text-xl">
                  Here we go with our fun lives. A lot active here
                </p>
              </div>
              <img className="h-34 w-44 mt-10" src={img3} />
            </div>
            <div className="flex flex-col text-center gap-2 text-white items-center justify-start glass w-full h-[40vh] overflow-hidden">
              <div className="mt-10">
                <p className="text-3xl font-genos font-semibold text-black">
                  Github
                </p>
                <p className="pr-10 pl-10 text-gray-500 text-lato text-xl">
                  All my Projects
                </p>
              </div>
              <img className="h-36 w-36 mt-5" src={img1} />
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn>
        <div className="w-full md:p-40 sm:p-20 p-5 mt-48 mb-28 flex flex-col items-center gap-10">
          <h1 className="text-white font-genos lg:text-6xl sm:text-4xl text-3xl text-center">
            <span className="text-[#8B4513]">Crafting</span> together, side by
            side, <span className="text-[#008080]">let's bring</span> our <br />
            <span className="border-b-[3px] border-[#564085] text-[#564085] font-medium hover:scale-125 duration-300 w-[200px] md:w-[300px] block mx-auto">
              ideas to life.
            </span>
          </h1>
          <button className="group sm:w-[60%] w-[90%] text-base sm:text-xl text-center group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:white relative bg-neutral-800 h-16 border p-3 text-white font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-24 after:h-24 after:content[''] after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Shoot me a mail
            <i
              className="fa-solid fa-paper-plane"
              style={{ "margin-left": "20px" }}
            ></i>
          </button>
        </div>
      </FadeIn>
    </>
  );
}

export default Socials;