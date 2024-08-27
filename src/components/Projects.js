import React from 'react';
import wetravel from '../assets/wetravel.jpg';
import { FaSquareGithub } from "react-icons/fa6";
import kider from '../assets/kider.jpg';
import tailwind from '../assets/tailwind.jpg';
import flutter from '../assets/flutter.jpg';

const Projects = () => {
  const projects = [
    {
      image: wetravel,
      title: 'Travel Guide App',
      link: 'https://github.com/sangammgr88/travelguideapp'
    },
    {
      image: kider,
      title: 'Kider',
      link: 'https://github.com/sangammgr88/kider'
    },
    {
      image: flutter,
      title: 'Flutter App',
      link: 'https://github.com/sangammgr88/Flutterapp'
    },
    {
      image: tailwind,
      title: 'Tailwind CSS',
      link: 'https://github.com/sangammgr88/tailwind'
    }
  ];

  return (
    <section className="p-4 sm:p-8">
      <div className="flex justify-center font-popins text-2xl sm:text-4xl mb-6 sm:mb-10">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.slice(0, 3).map((project, index) => (
          <div 
            key={index} 
            className='border-4 border-black rounded-xl bg-slate-300 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300'
          >
            <img 
              className='h-36 sm:h-44 w-full object-cover rounded-t-xl' 
              src={project.image} 
              alt={project.title} 
            />
            <div className='text-center mt-4'>
              <h1 className='text-lg sm:text-xl font-semibold text-gray-800'>{project.title}</h1>
              <a 
                href={project.link} 
                className='text-black mt-2 inline-block hover:text-gray-600 transition-colors duration-300'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSquareGithub className='text-2xl sm:text-3xl' />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 sm:mt-8">
        <div className='border-4 border-black rounded-xl bg-slate-300 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-2/3 lg:w-1/3'>
          <img className='h-36 sm:h-44 w-full object-cover rounded-t-xl' src={tailwind} alt="Tailwind CSS" />
          <div className='text-center mt-4'>
            <h1 className='text-lg sm:text-xl font-semibold text-gray-800'>Tailwind CSS</h1>
            <a 
              href="https://github.com/sangammgr88/tailwindcss" 
              className='text-black mt-2 inline-block hover:text-gray-600 transition-colors duration-300'
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaSquareGithub className='text-2xl sm:text-3xl' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
