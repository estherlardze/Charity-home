import React from 'react'
import { quote} from '../assets/index';
 

const TestimonialCard = ({heading,image, client, position}) => {
  return (
    <div className='flex flex-col justify-left align-left border border-green-500 p-2 w-[300px] '  data-aos="fade-up">
        <img src={quote} alt="quote" className='w-[20px] sm:w-[40px] '/>
        <h3 className='text-lg font-semibold mt-2'>{heading}</h3>
        <p className='my-[20px] text-sm'>Lorem Ipsum is simply dummy text  Lorem Ipsum is simply 
            dummy text Lorem Ipsum is simply dummy text  Lorem 
            Ipsum is simply dummy text Lorem Ipsum is </p>
            <div className='flex justify-between gap-4 sm:gap-0'>
                <img src={image} alt="profile" className='w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full'/>
                <div>
                    <p className='text-lg font-semibold'>{client}</p>
                    <p className='text-sm'>{position}</p>
                </div>
            </div>
    </div>
  )
}

export default TestimonialCard