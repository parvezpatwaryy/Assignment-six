import React from 'react';

const Card = ({ cards }) => {
  console.log(cards);
  return (
    <div className='w-[1200px] mx-auto space-y-4 pt-5'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>

      {
        cards.map(item => <div className='max-w-[1200px] max-h-[486px] shadow p-5 rounded-2xl' key={item.id}>
          
          <div className='flex items-center justify-between bg-gray-100 rounded-2xl p-3'>
            <div className='flex gap-6 items-center'>
            <img className=' object-contain' src={item.img} />
            <div>
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <p className='text-gray-400'>${item.price}</p>
          </div>
          </div>
          <div className='font-semibold text-red-500'>
            <h2>Remove</h2>
          </div>
          </div>
          
        </div>)
      }
      <div className='flex justify-between items-center'>
              <p className='text-gray-400'>Taitle</p>
              <h1 className='font-bold text-xl'>$78</h1>
            </div>
            <p className='text-[#FFFF] bg-[#9514FA] w-full rounded-full text-center'>Proceed to Checkout</p>
    </div>
  );
};

export default Card;