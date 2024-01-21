import React from 'react';

function Contact() {

  return (
    <>
      <div className="w-full md:my-10 my-28 h-[70vh] md:px-28 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="md:w-[50%] w-full h-full flex px-12 md:px-0">
          <h1 className="bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent font-genos lg:text-8xl text-6xl font-semibold">
            Let's get started
          </h1>
        </div>
        <div className="flex md:w-full h-full text-gray-400 p-5 md:p-0">
          <form className="flex flex-col p-5 md:text-[36px] text-[26px] font-lato font-semibold leading-loose  ">
            <p>
              My name is
              <input
                placeholder="Your name"
                className="md:mx-6 text-white w-[50%] md:text-3xl text-2xl max-w-fit text-start px-5 pb-2 bg-transparent border-b border-gray-500 outline-none overflow-hidden"
                type="text"
                style={{ "text-overflow": "ellipsis", "white-space": "nowrap" }}
              />
              and I have a
              <input
                placeholder="Project, Job, etc"
                className="md:mx-6 text-white w-[50%] md:text-3xl text-2xl max-w-fit text-start px-5 pb-2 bg-transparent border-b border-gray-500 outline-none overflow-hidden"
                type="text"
                style={{ "text-overflow": "ellipsis", "white-space": "nowrap" }}
              />
              that needs help. You can reach me at
              <input
                placeholder="Your email address"
                class="md:mx-6 text-white w-[50%] md:text-3xl text-2xl max-w-fit text-start px-5 pb-2 bg-transparent border-b border-gray-500 outline-none overflow-hidden"
                type="email"
                style={{ "text-overflow": "ellipsis", "white-space": "nowrap" }}
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