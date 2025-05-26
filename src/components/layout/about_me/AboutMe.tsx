import React from 'react';

export const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-accent">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold ">
            <p>
              Hi. I&apos;m Christoph,
              <br /> nice to meet you.{' '}
            </p>
          </div>
          <div>
            <p className="tracking-wider">
              👋 I’m an engineer with 5+ years of experience in technical sales and management consulting.
              I spent two years in Singapore’s semiconductor industry building client relationships and driving growth,
              followed by 3 years in Germany focusing on digitalization, project, and supply chain management.
              Recently, I completed a fullstack bootcamp at Le Wagon to sharpen my software development skills.
              I’m now seeking opportunities in Singapore to combine my engineering, consulting, and coding expertise
              in innovative teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
