import React from 'react';
import { data } from './../../../data/data';

export const Projects = () => {
  // projects file
  const project = data;
  // setProject(data);

  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="b-20 mb-10 pb-10 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-accent ">Projects</p>
          <br />
          <br />
          <br />
        </div>

        {/* container for projects */}
        <div className="flex flex-wrap justify-center gap-2">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})`, width: 'calc(50% - 1rem)' }}
              className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div w-1/2 h-20"
            >
              {/* Hover effect for images */}
              <a href="https://github.com/MauroSilva17">
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">{item.name}</span>
                  <p>{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
