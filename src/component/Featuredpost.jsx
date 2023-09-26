import React from 'react';
import {Rectangle3, Rectangle4} from '../assets/index'

const Featuredpost = () => {
  return (
    <div className='grid place-items-center grid-cols-12 mx-[30px] xl:mx-[100px]  mt-[180px]'>
      <div className='col-span-12 md:col-span-5 '>
        <div className='flex'>
          <p className='font-semibold'>Welcome to Charity</p>
          <hr className='border-b border-gray-300 w-[60px] mt-[18px] ml-1'/>
        </div>
       <h2 className='font-custom font-extrabold text-2xl my-[15px]'>Let Us Come Together<br /> To Make a Difference.</h2>
       <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
         nonumy tempor invidunt ut labore et dolore magna aliquyam <br />
         erat, sed diam voluptua. At vero eos et accusam et justo.</p>
          <button className='bg-[#219d80] text-white px-2 py-1 text-lg mt-6 hover:bg-[#198068] transition-bg ease-in duration-400'>Read More</button>
      </div>
      <div className='relative max-w-[600px] col-span-12 md:col-span-7 '>
        <img src={Rectangle3} alt="photo3" className='border-[15px] border-custom-color w-[400px] md:w-[360px] md:h-[380px] h-[410px] xl:w-[420px] xl:h-[430px]'/>
        <img src={Rectangle4} alt="photo4" className='border-[15px] border-custom-color absolute left-[35%] top-[60%] w-[300px] xl:h-[300px] xl:w-[330px] xl:h-[338px]'/>
      </div>
    </div>
  )
}

export default Featuredpost