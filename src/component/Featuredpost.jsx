import React from 'react';
import {Rectangle3} from '../assets/index'
import {BsShieldFillCheck} from 'react-icons/bs'

const Featuredpost = () => {
  return (
    <div className='grid items-center grid-cols-12 mx-[30px] xl:mx-[100px] md:mt-[220px] md:mb-[100px]'>
      <div className='col-span-12 md:col-span-5 '>
        <div className='flex'>
          <p className='font-semibold'>Welcome to Charity</p>
          <hr className='border-b border-gray-300 w-[60px] mt-[18px] ml-1'/>
        </div>
       <h2 className='font-custom font-extrabold text-2xl my-[15px]'>Let Us Come Together<br /> To Make a Difference.</h2>
       <p className='text-sm'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br />
         nonumy tempor invidunt ut labore et dolore magna aliquyam <br />
         erat, sed diam voluptua. At vero eos et accusam et justo.</p>
         <div>
         <div className='flex gap-[15px] mt-[20px]'>
            <div className='bg-[#EDF7F5] p-2 w-[190px]'>
            <h5 className='flex text-[#219D80] gap-[10px] font-bold'><span className='mt-[6px]'><BsShieldFillCheck /></span> <span>Our mission</span></h5>
               <p className='text-xs mt-2'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, <br />sed diam</p>
            </div>
            <div className='bg-[#EDF7F5] p-2 w-[190px]'>
              <h5 className='flex text-[#219D80] gap-[10px] font-bold'><span className='mt-[6px]'><BsShieldFillCheck /></span> <span>Our Vision</span></h5>
               <p className='text-xs mt-2'>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, <br />sed diam</p>
            </div>
         </div>
      </div>
      <div className='mx-[50px] mt-[40px]'>
        <p className='flex justify-between font-bold'><span className='text-[#219D80]'>Donations</span> 
            <span>75%</span>
        </p>
       <p className='w-[200px] h-[9px] bg-[#EDF7F5]'><span className='w-[200px] h-[9px] bg-red-500'></span></p>
      </div>
      </div>


      <div className='relative w-full md:max-w-[600px] col-span-12 md:col-span-7 '>
        <img src={Rectangle3} alt="photo3" className='border-[15px] border-custom-color w-full md:w-[360px] md:h-[380px] h-[410px] xl:w-[400px] '/>
        <ul className='list-disc border-[15px] border-custom-color absolute left-[35%] top-[60%]  w-full  xl:w-[320px] bg-white p-4 font-custom text-sm'>
          <li className='text-[#219d80] my-2 text-sm'>Together, we're going to make the future</li>
          <li className='my-2 text-sm'>children where we are able to fulfill all</li>
          <li className='my-2 text-sm'>their requirements to keep them safe withered world</li>
          <li className='my-2 text-sm'>We have already stepped out and start changing the world</li>
          <li className='my-2 text-sm'>Keeping safe them from war, inhumanity</li>
        </ul>
      </div>
    </div>
  )
}

export default Featuredpost