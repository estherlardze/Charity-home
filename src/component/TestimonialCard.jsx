import React from 'react'
import { quote} from '../assets/index';
 

const TestimonialCard = ({heading,image, client, position}) => {
  return (
    <div className='flex flex-col justify-left align-left border border-green-500 p-2 w-[300px] h-[270px]'>
        <img src={quote} alt="quote" className='w-[40px] h-[30px]'/>
        <h3 className='text-lg font-semibold mt-2'>{heading}</h3>
        <p className='my-[20px] text-sm'>Lorem Ipsum is simply dummy text  Lorem Ipsum is simply 
            dummy text Lorem Ipsum is simply dummy text  Lorem 
            Ipsum is simply dummy text Lorem Ipsum is </p>
            <div className='flex justify-between'>
                <img src={image} alt="profile" className='w-50px] h-[50px]'/>
                <div>
                    <p className='text-lg font-semibold'>{client}</p>
                    <p className='text-sm'>{position}</p>
                </div>
            </div>
    </div>
  )
}

export default TestimonialCard