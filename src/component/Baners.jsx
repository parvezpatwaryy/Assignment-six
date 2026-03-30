import React from 'react';

const Baners = () => {
  return (
    <div className='max-w-[1200px] mx-auto mt-[200px] space-y-5'>
      <div className='text-center'>
          <h1 className='font-black text-2xl'>Simple, Transparent Pricing</h1>
          <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 '>
        
        <div >
          <div className='max-w-[380px] rounded-2xl shadow p-5 font-semibold h-[400px]'>
            <h1 className='font-black text-xl'>Starter</h1>
            <p className='text-gray-400'>Perfect for getting started</p>
            <span className='flex my-4 items-center'>
              <h1 className='font-bold text-2xl'>$0</h1>
              <p>/month</p>
            </span>
            <div className='text-gray-400'>
              <ol>Access to 10 free tools</ol>
              <ol>Basic templates</ol>
              <ol>Community support</ol>
              <ol>1 project per month</ol>
            </div>
            <br />
            <br />
            <br />
            <button className='bg-[#9514FA] rounded-full w-full p-5 text-[#FFFF] font-black text-xl'>Get Started Free</button>
          </div>
        </div>
        <div>
          <div className='max-w-[380px] max-h-[448px] rounded-2xl shadow p-5 bg-[#9514FA]'>
            <h1 className='font-black text-xl text-white'>Pro</h1>
            <p className='text-white'>Best for professionals</p>
            <span className='flex my-4 items-center'>
              <h1 className='font-bold text-2xl text-white'>$29</h1>
              <p className='text-white'>/month</p>
            </span>
            <div className='text-white font-semibold'>
              <ol>Access to all premium tools</ol>
              <ol>Unlimited templates</ol>
              <ol>Priority support</ol>
              <ol>Unlimited projects</ol>
              <ol>Cloud sync</ol>
              <ol>Advanced analytics</ol>
            </div>
            <br />
            <button className='bg-[#FFFF] rounded-full w-full p-5 text-[#9514FA] font-black text-xl'>Start Pro Trial</button>
          </div>
        </div>
        <div>
          <div className='max-w-[380px] max-h-[448px] shadow p-5 rounded-2xl'>
            <h1 className='font-black text-xl'>Enterprise</h1>
            <p className='text-gray-400'>For teams and businesses</p>
            <span className='flex my-4 items-center'>
              <h1 className='font-bold text-2xl'>$99</h1>
              <p>/month</p>
            </span>
            <div className='text-gray-400 font-semibold'>
              <ol>Everything in Pro</ol>
              <ol>Team collaboration</ol>
              <ol>Custom integrations</ol>
              <ol>Dedicated support</ol>
              <ol>SLA guarantee</ol>
              <ol>Custom branding</ol>
            </div>
            <br />
            <button className='bg-[#9514FA] rounded-full w-full p-5 text-[#FFFF] font-black text-xl'>Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baners;