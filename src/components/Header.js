import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <> 
      <nav className='flex justify-between  h-10 p-2 md:px-4'>
        <div className='h-12 w-12'><img src={logo} alt="" /></div>
        
      
        <ul className="flex text-black font-bold list-none space-x-4 gap-7">
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="">About</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
