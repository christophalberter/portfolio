import React from 'react';

export const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold ">
            <p>
              Hi. I&apos;m Mauro Silva,
              <br /> nice to meet you.{' '}
            </p>
          </div>
          <div>
            <p className="tracking-wider">
              👋 Hello there! I&apos;m a tech enthusiast and lifelong learner with a passion for web development.
              I&apos;ve embarked on a unique journey, balancing truck driving with my love for technology. During my
              off-hours, I immerse myself in the world of web development. We can say that I&apos;ve been on the road of
              web development for more than 2 years now, and while there have been some obstacles along the way,
              I&apos;ve managed to overcome and grow with them. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
