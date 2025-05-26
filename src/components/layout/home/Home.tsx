import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-accent">Christoph Alberter</h1><br></br>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">Consultant. Engineer. Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Versatile project manager with 5+ years in technical sales, consulting, and software development, seeking opportunities in Singapore.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-accent hover:border-accent">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
