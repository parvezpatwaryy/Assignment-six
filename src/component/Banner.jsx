import React from 'react';

const Banner = () => {
  return (
    <div className='max-w-[1600px] max-h-[247px] bg-[#9514FA] mx-auto p-[60px] mt-20'>
      <div className='text-center'>
        <div className='flex gap-20 flex-row justify-center items-center'>
        <h1 className='font-extrabold text-5xl text-[#FFFF]'>50K+</h1>
        <h1 className='font-extrabold text-5xl text-[#FFFF]'>200+</h1>
        <h1 className='font-extrabold text-5xl text-[#FFFF]'>4.9</h1>
      </div>
      <div className='flex gap-30 flex-row justify-center items-center mt-3'>
        <p className='font-semibold text-[#FFFF]'>Active Users</p>
        <p className='font-semibold text-[#FFFF]'>Premium Tools</p>
        <p className='font-semibold text-[#FFFF]'>Rating</p>
      </div>
      </div>
    </div>
  );
};

export default Banner;