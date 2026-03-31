import React, { use } from 'react';
const Modelse = ({ modelPromis ,cards,setCards}) => {
  const models = use(modelPromis)
  const handleAddCard = (model) => {
    setCards([...cards, model]);
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1250px] h-auto mx-auto'>
      {
        models.map(model => (
          <div key={model.id} className=''>
            <div className='mt-30 shadow max-w-[380px] max-h-[490px] p-5 space-y-3 rounded-2xl'>
              <p className='bg-amber-200 rounded-full pl-60'>Best Seller</p>
              <img src={model.img} />
              <h1 className='font-bold text-2xl'>{model.name}</h1>
              <p className='font-semibold text-gray-400'>{model.description}</p>
              <span className='flex'>
                <h1 className='font-bold text-2xl'>${model.price}</h1>
                <p>/Mo</p>
              </span>
              <p className='font-semibold text-gray-400'>{model.period}</p>
              <p className='font-semibold text-gray-400'>{model.tag}</p>
              <p className='font-semibold text-gray-400'>{model.tagType}</p>
              <button onClick={() => handleAddCard(model)} className='btn btn-primary w-full rounded-full'>Buy Now</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}
export default Modelse;