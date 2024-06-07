import React from 'react'

const Card = ({item_id, item_image}) => {
  return (
    <div className='max-w-[320px] max-h-[240px] rounded-2xl shadow-md relative'>
        <div className='w-full h-full'>
            <img 
            src={item_image}
            alt="house"
            className='w-[320px] h-[240px] rounded-2xl shadow-md' />
        <div className='border w-10 h-10 bg-slate-300 text-xl font-bold rounded-full absolute text-center py-1 -top-4 right-0'>{item_id}</div>
        </div>
        <p className='text-center mt-3 text-xl'>Competitor {item_id}</p>
    </div>
  )
}

export default Card