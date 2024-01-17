import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [nav,setnav] = useState(false);
    const [icon,seticon] = useState(true);

    const shownav = () => {
        setnav(!nav);
    }
    const showicon = () => {
        seticon(!icon);
    }

    

  return (
    <>
      <div className={`flex sticky h-[20vh] top-0 justify-between p-6 z-50`}>
        <div className="font-dance text-3xl hover:text-4xl duration-500 flex text-white w-[140px]">
          SS
        </div>
        <nav className="stroke hidden sm:block">
          <ul className="flex gap-12 text-xl font-lato">
            <Link to="/">
              <li className="">
                <a>Home</a>
              </li>
            </Link>
            <Link to="/about">
              <li className="">
                <a>About</a>
              </li>
            </Link>
            <Link to="/work">
              <li className="">
                <a>Work</a>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="text-[#aaa] text-xl font-lato hidden mdx:block">
          <button>
            <Link to="/contact">
              <span className="box">Contact</span>
            </Link>
          </button>
        </div>
        <div className="text-white relative top-[6px] text-2xl flex sm:hidden">
          <i
            onClick={() => {
              shownav(), showicon();
            }}
            className={icon ? "fa-solid fa-bolt" : "fa-brands fa-mixer"}
          ></i>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={
            nav
              ? "font-hind fixed text-white top-[10%] w-[90%] rounded-2xl border-2 bg-[#0c0c0c] ease-in-out duration-500 z-50"
              : "font-hind fixed top-[-100%] ease-in-out duration-500 w-[90%] rounded-2xl border-2 z-50"
          }
        >
          <div className="flex flex-col p-10 gap-5">
            <Link to="/"><h1 className="text-2xl font-lato">Home</h1></Link>
            <Link to="/about"><h1 className="text-2xl font-lato">About</h1></Link>
            <Link to="/work"><h1 className="text-2xl font-lato">Work</h1></Link>
            <Link to="/contact"><h1 className="text-2xl font-lato">Contact</h1></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
