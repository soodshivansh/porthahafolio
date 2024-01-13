import React, { useState } from 'react';

function Navbar() {

    const [nav,setnav] = useState(true);
    const [icon,seticon] = useState(true);

    const shownav = () => {
        setnav(!nav);
    }
    const showicon = () => {
        seticon(!icon);
    }

  return (
    <>
      <div className='flex sticky h-[20vh] top-0 justify-between p-6'>
        <div className='font-dance text-3xl hover:text-4xl duration-500 flex text-white w-[140px]'>
          SS
        </div>
        <nav className='stroke hidden sm:block'>
          <ul className='flex gap-12 text-xl font-lato'>
            <li className=''><a>Home</a></li>
            <li className=''><a>About</a></li>
            <li className=''><a>Work</a></li>
          </ul>
        </nav>
        <div className='text-[#aaa] text-xl font-lato hidden md:block'>
          <button>
            <span className="box">
              Contact
            </span>
          </button>
        </div>
        <div className='text-white relative top-[6px] text-2xl flex sm:hidden'>
            <i onClick={() => {shownav(),showicon()}} className={icon ? "fa-solid fa-bolt": "fa-brands fa-mixer"}></i>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className={!nav ? 'font-hind fixed text-white top-[10%] w-[90%] rounded-2xl border-2 bg-[#0c0c0c] ease-in-out duration-500 z-50' : 'font-hind fixed top-[-100%] ease-in-out duration-500 w-[90%] rounded-2xl border-2 z-50'}>
            <div className='flex flex-col p-10 gap-5'>
                <h1 className='text-2xl font-lato'>Home</h1>
                <h1 className='text-2xl font-lato'>About</h1>
                <h1 className='text-2xl font-lato'>Work</h1>
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
