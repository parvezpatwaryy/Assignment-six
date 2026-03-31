import React from 'react';
import navicon from "../assets/icon.png"
const NavBar = () => {
  return (
    <div className='flex justify-between items-center sm:w-[600px] lg:w-[1600px] max-h-[92px] mx-auto p-10 shadow-xl'>
      <div className='font-extrabold text-3xl text-[#9514FA] items-center'>
        <h1>DigiTools</h1>
      </div>
      
        <div className='font-2xl flex gap-5 items-center text-black font-semibold'>
          <p>Products</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
          <p>FAQ</p>
        </div>
      <div className='flex gap-3 items-center text-black'>
        <img className='w-[40px]h-[40px]' src={navicon} alt="" />
        <p className='font-semibold text-black'>Login</p>
        <button className='font-semibold bg-[#4F39F6] p-2 rounded-full w-[150px] text-[#FFFF]'>Get Started</button>
      </div>
    </div>
  );
};

export default NavBar;