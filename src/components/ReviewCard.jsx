import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({review}) => {
    return (
    <div className='flex justify-center items-center flex-col'>
        <img src={review.imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'/>
        <p className='text-slate-gray text-center my-4 leading-normal max-w-sm'>{review.feedback}</p>
        <div className='flex flex-1 gap-2'>
            <img src={star} width={24} height={24} className='m-0 object-contain'/>
            <p className='font-montserrat text-slate-gray'>({review.rating})</p>
        </div>
        <h3 className='text-2xl font-bold my-3'>
            {review.customerName}
        </h3>
    </div>
  )
}

export default ReviewCard