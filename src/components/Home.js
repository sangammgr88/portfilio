import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import photo from "../assets/photo.png";

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-10 gap-5 mt-10 p-5'>
      <ul className="flex md:flex-col space-x-6 md:space-x-0 md:space-y-4">
        <li><FaFacebook /></li>
        <li><AiFillInstagram /></li>
        <li><FaGithubAlt /></li>
      </ul>
      <div className='text-center md:text-left'>
        <h1 className='font-bold text-3xl md:text-4xl'>SanGam MaGaR</h1>
        <h3 className='text-xl md:text-2xl mt-2'>Front-End Developer</h3>
        <p className='mt-4'>
          Front-End Developer passionate about creating seamless, responsive, <br /> and visually striking interfaces using HTML, CSS, JavaScript, and React.
        </p>
        <button className='border bg-black text-white rounded-xl h-9 w-44 mt-5 p-1'>
          Say Hello
        </button>
      </div>
      <div className='flex justify-center'>
        <img className='rounded-full h-40 w-40 md:h-60 md:w-60 m-4 md:m-10 border-4 md:border-8 border-black' src={photo} alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
