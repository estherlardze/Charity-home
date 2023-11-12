import React from 'react';

const Hero = () => {
  return (
    <div className='bg-hero bg-cover bg-center h-[90vh] w-full mb-10' id='home'>
        <div data-aos="fade-up" className='text-white flex flex-col justify-center w-[90%] mx-[5%] items-center pt-[20vh]'>
          <p className='font-semibold'>give hope for homeless</p>
          <h2 className='font-extrabold text-3xl md:text-4xl xl:text-6xl font-custom my-2'>Helping each other <br /> can make world better</h2>
          <p className='text-gray-300'>We Seek out world changers and difference makers around the <br /> globe,
            and equip them to fulfill their unique purpose.
          </p>
          <div className='flex gap-[20px] mt-6 justify-center '>
            <button className='bg-[#219d80] text-white px-2 py-1 text-lg transition-all hover:bg-white border-2 border-[#219d80] hover:text-[#219d80]'>
              Donate now
            </button>
            <button className='bg-transparent border-2 border-[#219d80] text-white px-2 py-1 text-lg hover:bg-[#219d80] hover:text-white transition-all'>
              Know About Us
            </button>
          </div>

        </div>
    </div>
  )
}

export default Hero