import React from 'react'
import { quote} from '../assets/index';
 

const TestimonialCard = ({heading}) => {
  return (
    <div className='flex flex-col justify-left align-left border'>
        <img src={quote} alt="quote" />
        <h3 className='text-lg'>{heading}</h3>
        <p className='my-[15px]'>Lorem Ipsum is simply dummy text  Lorem Ipsum is simply 
            dummy text Lorem Ipsum is simply dummy text  Lorem 
            Ipsum is simply dummy text Lorem Ipsum is </p>
            <div className='flex justify-between'>
                <img src={image} alt="profile" />
                <div>
                    <h3>{client}</h3>
                    <p>{position}</p>
                </div>
            </div>
    </div>
  )
}

export default TestimonialCard