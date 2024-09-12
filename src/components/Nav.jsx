import React from 'react';
import logo from '../assets/logo.png';


const Nav = () => {
  return (
    <div className="bg-transparent flex space-x-[100px] m-5 font-bold items-center md:space-x-[1000px] md:mt-5 md:mx-10 fixed">
        <div>
        <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-full" />
        </div>
      <div className='list-none flex space-x-2 md:space-x-5'>
        <li>Home</li>
        <li>Service</li>
        <li>Story</li>
        <li>Our Works</li>
        <li>Contact</li>
      </div>
    </div>
  )
}

export default Nav
