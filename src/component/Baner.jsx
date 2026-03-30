import React from 'react';
import icon from "../assets/me.png"
import iconto from "../assets/iconto.png"
import iconthree from "../assets/iconthree.png"
import group from "../assets/group.png"
import imgto from "../assets/imgto.png"
import imhthree from "../assets/imgthree.png"
const Baner = () => {
  return (
    <div className='max-w-[1600px] mt-[200px] mx-auto'>
      <div className='w-[1200px] mx-auto text-center mt-3 space-y-3'>
        <h1 className='font-bold text-5xl'>Get Started in 3 Steps</h1>
        <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pt-6'>
      <div className='max-w-[380px] max-h-[380px] shadow rounded-2xl p-5 text-center space-y-2'>
        <img className='pl-70 pt-[20px]' src={icon} />
        <img className='block mx-auto' src={group} />
        <h1 className='font-bold text-xl pr-[0px]'>Create Account</h1>
        <p className='text-gray-400'>Sign up for free in seconds. No credit card required to get started.</p>
      </div>
      <div className='max-w-[380px] max-h-[380px] shadow rounded-2xl p-5 text-center space-y-2'>
        <img className='pl-70 pt-[20px]' src={iconthree} />
        <img className='block mx-auto' src={imgto} />
        <h1 className='font-bold text-xl pr-[0px]'>Choose Products</h1>
        <p className='text-gray-400'>Browse our catalog and select the tools <br />that fit your needs.</p>
      </div>
      <div className='max-w-[380px] max-h-[380px] shadow rounded-2xl p-5 text-center space-y-2 '>
        <img className='pl-70 pt-[20px]' src={iconto} />
        <img className='block mx-auto' src={imhthree} />
        <h1 className='font-bold text-xl'>Start Creating</h1>
        <p className='text-gray-400'>Download and start using your premium <br />tools immediately.</p>
      </div>
      
      </div>
    </div>
  );
};

export default Baner;