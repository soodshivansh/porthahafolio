import React from 'react';

function Contact() {

  return (
    <>
      <div className="w-full mt-10 h-[70vh] px-28 flex items-center justify-center gap-10">
        <div className="w-[50%] h-full flex">
          <h1 className="bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent font-genos text-8xl font-semibold">
            Let's get started
          </h1>
        </div>
        <div className="flex w-full h-full text-gray-400">
          <form className="flex flex-col w-full p-5 text-[36px] font-lato font-semibold leading-loose  ">
            <p>
              My name is
              <input
                placeholder="Your name"
                className="mx-6 text-white text-3xl text-start pl-5 pb-2 bg-transparent  border-b border-gray-500 outline-none"
                type="text"
              />
              and I have a
              <input
                placeholder="Project, Job, etc"
                className="mx-6 text-white text-3xl text-start pl-5 pb-2 bg-transparent border-b border-gray-500 outline-none"
                type="text"
              />
              that needs help. You can reach me at
              <input
                placeholder="Your email address"
                className="mx-6 text-white text-3xl text-start pl-5 pb-2 bg-transparent border-b border-gray-500 outline-none"
                type="email"
              />
              to get things started.
            </p>
            <button
              className="flex text-green-900 max-w-fit justify-start mt-10 hover:text-green-500 hover:translate-x-5 duration-300"
              type="submit"
            >
              -- Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;