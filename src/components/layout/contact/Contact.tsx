import React from 'react';

export const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
      <form method="POST" action="https://getform.io/f/paygpgya" className="flex flex-col max-w-[600px] w-full" target="_blank" rel="noreferrer">
        <div className="py-10">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
          <p className="text-gray-300 py-3">Send me a message 😉 </p>

          <p />
        </div>
        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows={7} placeholder="Message" required></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
};
