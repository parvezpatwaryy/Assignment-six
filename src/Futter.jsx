import React from 'react';
import instragram from "./assets/Instagram.png"
import facebook from "./assets/Facebook.png"
import tuiter from "./assets/Twitter.png"
const Futter = () => {
  return (
    <div className='max-w-[1600px] mx-auto bg-black p-10 md:p-20 flex flex-wrap justify-between items-start text-white'>
      
      <div className='max-w-xs mb-10'>
        <h1 className='text-2xl font-bold mb-4'>DigiTools</h1>
        <p className='text-gray-400'>
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='font-bold text-lg mb-4'>Product</h3>
        <div className='text-gray-400 space-y-2'>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
      </div>
      <div className='mb-10'>
        <h3 className='font-bold text-lg mb-4'>Company</h3>
        <div className='text-gray-400 space-y-2'>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
      </div>
      <div className='mb-10'>
        <h3 className='font-bold text-lg mb-4'>Resources</h3>
        <div className='text-gray-400 space-y-2'>
          <p>Documentation</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='mb-10'>
        <h3 className='font-bold text-lg mb-4 text-white'>Social Links</h3>
        <div className='flex gap-4'>
          <img className="w-6 h-6" src={instragram} alt="instagram" />
          <img className="w-6 h-6" src={facebook} alt="facebook" />
          <img className="w-6 h-6" src={tuiter} alt="twitter" />
        </div>
      </div>

    </div>
  );
};

export default Futter;