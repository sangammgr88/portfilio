import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='font-bold text-black text-center'>
    
        <a href="/" className="text-2xl font-bold hover:underline">
          SanGaM
        </a>

        <ul className="flex justify-center list-none gap-5 mt-4">
          <li><a href="#">About</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="https://github.com/sangammgr88">GitHub</a></li>
        </ul>

        <div className='flex justify-center gap-10 p-8'>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebook className="text-3xl" /> 
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <RiInstagramLine className="text-3xl" /> 
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl" /> 
          </a>
        </div>
        <div><p>@copyright from SanGaM !</p></div>
      </div>
    </footer>
  )
}

export default Footer
