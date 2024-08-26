import React from 'react';
import about from '../assets/about.png';

const About = () => {
  return (
    <div className='p-6 md:p-12 lg:p-20'>
      <h1 className='flex justify-center font-popins text-2xl md:text-3xl'>About Me</h1>
      <p className='flex justify-center mt-2 text-sm md:text-base'>My introduction</p>

      <div className='flex flex-col lg:flex-row justify-between gap-12 lg:items-start mt-10'>
        <img 
          className='h-48 w-48 md:h-72 md:w-72 lg:h-96 lg:w-96 border-4 rounded-3xl border-black mb-8 lg:mb-0' 
          src={about} 
          alt="About" 
        />
        <div className='flex flex-col gap-6 lg:gap-8 text-sm md:text-base'>
          <p>
            Hello! I'm Sangam, a front-end developer currently pursuing a Bachelor's degree in BIT. My journey in web development began with a fascination for design and technology, leading me to specialize in front-end development. I enjoy turning ideas into visually compelling and user-friendly websites and applications.
          </p>
          <p>
            With expertise in HTML, CSS, JavaScript, and frameworks like React and Flutter, I strive to create clean, responsive, and accessible web experiences. I'm passionate about staying up-to-date with the latest trends and best practices in front-end development, continuously enhancing my skills to deliver top-notch solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new tech, solving complex problems, or working on personal projects that push my creative boundaries. I'm excited to collaborate on innovative projects that make a difference and challenge me to grow as a developer.
          </p>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='font-bold text-lg md:text-xl'>Here are a few technologies I've been working with recently:</h1>
        <ul className='mt-4 space-y-2 text-sm md:text-base'>
          <li>JavaScript</li>
          <li>React</li>
          <li>Flutter</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
