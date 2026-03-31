import React from 'react';
import {toast, ToastContainer } from 'react-toastify';
const Card = ({ cards,setCards }) => {
  const totalprice = cards.reduce((sum, item) => sum + item.price,0)
   const handlePayment =()=>{
    setCards([]);
    toast.error("Proceed to Checkout")
   }
   
   const handleDelet =(item)=>{
    const filterdArray = cards.filter(c=>c.id !== item.id)
    setCards(filterdArray);
    toast.error("Card delet")
   }
  return (
    <div className='md:w-[600px] lg:w-[1200px] mx-auto space-y-4 pt-5'>
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
            <div onClick={()=>handleDelet(item)} className='font-semibold text-red-500'>
              <h2>Remove</h2>
            </div>
          </div>

        </div>)
      }
      <div className='flex justify-between items-center'>
        <p className='text-gray-400'>Taitle</p>
        <h1 className='font-bold text-xl'>${totalprice}</h1>
      </div>
      <button onClick={handlePayment} className='text-[#FFFF] bg-[#9514FA] w-full rounded-full text-center'>Proceed to Checkout</button>
      <ToastContainer/>
    </div>
  );
};

export default Card;