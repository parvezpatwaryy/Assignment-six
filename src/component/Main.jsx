import React from 'react';
import bannerimg from "../assets/banner.png"
import bannericon from "../assets/Rectangle 4.png"
const Main = () => {
  return (
    <div className='max-w-[1600px]  flex mt-[85px] items-center justify-center gap-6'>
      <div className='space-y-3 mx-auto items-center'>
        <div className='flex'>
          <p className='bg-gray-400 rounded-full flex items-center gap-2'> <img className='w-[15px] h-[15px] bg-[#9514FA] rounded-full' src={bannericon} />New: AI-Powered Tools Available</p>
        </div>
        <h1 className='font-extrabold text-6xl'>Supercharge Your <br /> Digital Workflow</h1>
        <p>Access premium AI tools, design assets, templates, and productivity
          <br />
          software—all in one place. Start creating faster today.
          <br />
          Explore Products
        </p>
        <div className='flex gap-5'>
          <p className='bg-[#9514FA] rounded-full text-[#FFFFFF] p-[15px]'>Explore Products</p>
          <p className='p-[15px] text-[#9514FA] font-semibold border-1 rounded-full w-[150px] text-center'>Watch Demo</p>
        </div>
      </div>
      <div>
        <img src={bannerimg} />
      </div>
    </div>
  );
};

export default Main;