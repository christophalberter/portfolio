import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mauro Silva</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">Full Stack Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I&apos;m a self-taught full-stack developer currently working at Endless DS as a part-time while keeping the
          job of a truck driver. Let&apos;s say i&apos;m on a learning road.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <Link to="work" smooth={true} duration={500}>
                <HiArrowNarrowRight className="ml-3 " />
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
