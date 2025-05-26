import React from 'react';

export const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
      <form method="POST" action="https://getform.io/f/bqomolwb" className="flex flex-col max-w-[600px] w-full" target="_blank" rel="noreferrer">
        <div className="py-10">
          <p className="text-4xl font-bold inline border-b-4 border-accent text-gray-300">Contact</p>
          <p className="text-gray-300 py-3">Let's get in touch! </p>

          <p />
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows={7} placeholder="Message" required></textarea>
        <button className="text-white border-2 hover:bg-accent hover:border-accent px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};
