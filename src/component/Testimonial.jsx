import React from 'react';
import TestimonialCard from './TestimonialCard';
import {profile1, profile2, profile3} from '../assets/index'
import {PiArrowUpRightBold} from 'react-icons/pi'

const Testimonial = () => {
  return (
    <div className='mx-[50px] font-primary-color mb-8 sm:mt-[100px] '>
      <div className='flex justify-between align-center gap-[10px]'>
         <div className='md:ml-[140px]'>
          <p className='text-[#00725e] text-lg '>Tetimonial</p>
          <h1 className='font-bold text-4xl'>What People Say About Us</h1>
         </div>
         <PiArrowUpRightBold size={38} className='bg-[#00725e] text-white p-2 rounded-tr-2xl cursor-pointer mt-[50px] lg:mt-[20px] lg:mr-[70px]'/>
      </div>
      <div className="flex flex-wrap align-center justify-center gap-[20px] lg:gap-[35px] my-[20px]">
         <TestimonialCard heading="Kindness" image={profile1} client="John Doe" position="Senior Gardener Farmer" />
         <TestimonialCard heading="Humanity" image={profile2} client="Jack Harry" position="Senior Gardener Farmer"/>
         <TestimonialCard heading="Ethics & Morality" image={profile3} client="Sakib Hossain" position="Senior Gardener Farmer"/>
      </div>
    </div>
  )
}

export default Testimonial