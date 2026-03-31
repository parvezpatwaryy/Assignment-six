import React from 'react';

const Bannerers = () => {
  return (
    <div className='md:w-[600px] lg:w-[1600px] mt-[100px] h-[487px] mx-auto bg-[#4F39F6]' >
      <div className='text-center pt-[150px] space-y-5'>
        <h1 className='font-bold text-5xl text-[#FFFF]'>Ready to Transform Your Workflow?</h1>
        <p className='font-semibold text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter <br />Start your free trial today.</p>
        <div className='flex gap-3 pl-[670px]'>
          <button className='bg-[#FFFF] rounded-full p-3'>Explore Products</button>
          <button className='text-[#FFFF] rounded-full border p-3'>View Pricing</button>
        </div>
        <p className='font-semibold text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Bannerers;