import React from 'react';
import {Rectangle1, Rectangle2} from '../assets/index'

const About = () => {
  return (
    <div className='grid place-items-center grid-cols-12 mx-[30px] xl:mx-[100px] '>
      <div className='relative max-w-[600px] col-span-12 md:col-span-7 '>
        <img src={Rectangle1} alt="photo" className='border-[15px] border-custom-color w-[400px] md:w-[360px] md:h-[380px] h-[410px] xl:w-[450px] xl:h-[470px]'/>
        <img src={Rectangle2} alt="photo2" className='border-[15px] border-custom-color absolute left-[35%] top-[60%] w-[300px] xl:h-[300px] xl:w-[330px] xl:h-[338px]'/>
      </div>
      <div className='col-span-12 md:col-span-5 mt-[160px] md:mt-[140px] '>
        <div className='flex'>
          <p className='font-semibold'>About us</p>
          <hr className='border-b border-gray-300 w-[60px] mt-[18px] ml-1'/>
        </div>
       <h2 className='font-custom font-extrabold text-2xl my-[15px]'>Your Support is Really <br /> Powerful.</h2>
       <p>The secret to happiness lies in helping others. Never <br />
          underestimate the difference YOU can make in the <br />
          lives of the poor, the abused and the helpless.</p>
          <button className='bg-[#219d80] text-white px-2 py-1 text-lg mt-6 hover:bg-[#198068] transition-bg ease-in duration-400'>Read More</button>
      </div>
    </div>
  )
}

export default About