import React from 'react';
import {Rectangle3} from '../assets/index'
import {BsShieldFillCheck} from 'react-icons/bs'

const Featuredpost = () => {
  return (
    <div className='grid place-items-center grid-cols-12 mx-[30px] xl:mx-[200px] mt-[50px] md:mt-[220px] md:mb-[250px]'>
      <div className='col-span-12 lg:col-span-7 mx-4'>
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
      <div className=' mt-[40px] w-[94%] mx-[3%]  sm:w-[90%]'>
        <p className='flex justify-between font-bold'>
           <span className='mb-2'>Donations</span> 
           <span>75%</span>
        </p>
       <p className='w-full overflow-hidden h-[9px] bg-[#EDF7F5] transition-all duration-300 ease-in cubic-bezier-[.25, .8, .25, 1]'>
        <span className='animate-animated duration-3000 w-[75%] h-[9px] float-left bg-[#219D80]'></span></p>
      </div>
      </div>


      <div className='relative w-full lg:max-w-[600px] col-span-12 lg:col-span-5 mt-[50px] lg:mt-0 mx-10 lg:mx-0'>
        <img src={Rectangle3} alt="photo3" className='border-[15px] border-custom-color  md:h-[380px] h-[410px]  w-full md:w-[360px]  xl:w-[430px]'/>
        <ul className='list-disc border-[15px] border-custom-color absolute left-[10%] sm:left-[35%] top-[60%] xl:w-[300px] bg-white p-4 font-custom text-sm '>
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