import React from 'react';

function Contact() {

  return (
    <>
      <div className='flex w-full px-40 gap-20 pt-20 text-white'>
        <div className='w-[70%]'>
            <h1 className='text-7xl font-lato pb-36'>Lets get Started</h1>
            <div className='w-full h-[2px] bg-slate-700' ></div>
            <form>

              <div className='flex gap-20 p-10'>
                <div className='font-genos'>
                  <p className='text-4xl'>01</p>
                </div>
                <div className='flex flex-col gap-10 font-lato'>
                  <p className='text-3xl'>Whats your name?</p>
                  <input class="bg-transparent text-gray-400 text-2xl border-none outline-none hover:border-none focus:border-none" type="text" placeholder="Shivansh Sood *" />
                </div>
              </div>
              <div className='w-full h-[2px] bg-slate-700' ></div>
              <div className='flex gap-20 p-10'>
                <div className='font-genos'>
                  <p className='text-4xl'>02</p>
                </div>
                <div className='flex flex-col gap-10 font-lato'>
                  <p className='text-3xl'>Whats your contact?</p>
                  <input class="bg-transparent text-gray-400 overflow-ellipsis text-2xl border-none outline-none hover:border-none focus:border-none" type="text" placeholder="soodshivansh50@gmail.com / +91 12345 *" />
                </div>
              </div>
              <div className='w-full h-[2px] bg-slate-700' ></div>
              <div className='flex gap-20 p-10'>
                <div className='font-genos'>
                  <p className='text-4xl'>03</p>
                </div>
                <div className='flex flex-col gap-10 font-lato'>
                  <p className='text-3xl'>Whats services are you looking for?</p>
                  <input class="bg-transparent text-gray-400 overflow-ellipsis text-2xl border-none outline-none hover:border-none focus:border-none" type="text" placeholder="Web development, *" />
                </div>
              </div>
              <div className='w-full h-[2px] bg-slate-700' ></div>
              <div className='flex gap-20 p-10'>
                <div className='font-genos'>
                  <p className='text-4xl'>04</p>
                </div>
                <div className='flex flex-col gap-10 font-lato'>
                  <p className='text-3xl'>Your message.</p>
                  <input row="10" class="bg-transparent text-gray-400 overflow-ellipsis text-2xl border-none outline-none hover:border-none focus:border-none" type="text" placeholder="Hey can you help me with" />
                </div>
              </div>
            </form>
            <button className='text-3xl text-blue-500 p-10 hover:translate-x-5 duration-300'>
              Send {"->"}
            </button>

        </div>
        <div className='w-[30%] flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
              <p className='font-genos text-2xl text-gray-400'>Contact Details</p>
              <p className='text-lg font-lato'>soodshivansh50@gmail.com</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-genos text-2xl text-gray-400'>location</p>
              <p className='text-lg font-lato'>Indirapuram, Uttar Pradesh, India</p>
              <p className='text-lg font-lato'>201014</p>
            </div>
            <div className='flex flex-col gap-5'>
              <p className='font-genos text-2xl text-gray-400'>Socials</p>
              <p className='text-lg font-lato'>Github - github.com/soodshivansh</p>
              <p className='text-lg font-lato'>Linkedin - linkedin.com/in/sood-shivansh</p>
              <p className='text-lg font-lato'>Instagram - instagram.com/soodshivansh</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
