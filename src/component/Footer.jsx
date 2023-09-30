import React from 'react';
import {AiOutlineTwitter, AiFillYoutube} from 'react-icons/ai';
import {FaInstagramSquare} from 'react-icons/fa';
import {BsPinterest} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-[#22262F] text-white px-8 pt-6 '>
       <div className='flex flex-wrap justify-between mb-[30px] gap-8'>
          <div data-aos="fade-right">
           <a href="#" className='font-custom font-bold text-lg'>Address</a>
            <p className='text-[#AFAFAF] mt-3'>A-272, Surajmal Vihar, Delhi, 11009281-8181-0860</p>
            <p className='text-[#AFAFAF]'>contact@vivekguptafoundation.in</p>
          </div>
          <div data-aos="fade-left">
            <a href="#" className='font-custom font-bold text-lg'>Get In Touch</a>
            <p className='text-[#AFAFAF] mt-3'>Contact us</p>
            <p className='text-[#AFAFAF]'>Our services</p>
          </div>
          <div data-aos="fade-right">
            <a href="#" className='font-custom font-bold text-lg '>Newsletter</a>
            <div className='mt-3 flex flex-wrap'>
              <input type="text" placeholder='Enter your Email address' className='py-[5px] px-4 outline-none'/>
              <button className='bg-[#219d80] text-white px-2 py-[3.5px] text-lg'>Subscribe</button>
            </div>
            <small className='text-[#AFAFAF]'>Your email is safe with us,we don't spam.</small>
          </div>
       </div>
       <hr className='border-b border-gray-700 w-full mt-[18px] mb-4'/>

       <div className='text-center' data-aos="fade-up">
        <a href="#" className='font-custom font-bold text-lg mb-4'>Follow Me</a>
         <div className='text-black flex gap-[30px] align-center justify-center mt-[20px]' >
           <AiOutlineTwitter size={40} className='bg-[#d9f5ee] p-1 rounded-[50%]'/>
           <FaInstagramSquare size={40} className='bg-[#d9f5ee] p-1 rounded-[50%]'/>
           <BsPinterest size={40} className='bg-[#d9f5ee] p-1 rounded-[50%]'/>
           <AiFillYoutube size={40} className='bg-[#d9f5ee] p-1 rounded-[50%]'/>
         </div>
       </div>
    </footer>
  )
}

export default Footer