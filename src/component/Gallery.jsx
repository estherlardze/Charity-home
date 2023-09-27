import React from 'react';
import {Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8} from '../assets/index'

const Gallery = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 ">
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
        <img src={Photo1} alt="gallery" className='w-[220px]'/>
      </div>
      <div className="">
        <img src={Photo3} alt="gallery" className='w-[300px]'/>
      </div>
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
      <img src={Photo4} alt="gallery" className='w-[400px]'/>
      </div>   
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
      <img src={Photo6} alt="gallery" className='w-[400px]'/>
      </div>
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
        <img src={Photo7} alt="gallery" className='w-[190px]'/>
      </div>
       <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
        <img src={Photo2} alt="gallery" className='w-[190px]'/>
      </div> 
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
      <img src={Photo5} alt="gallery" className='w-[280px]' />
      </div> 
      <div className="bg-white bg-opacity-80 text-center py-20 text-2xl">
        <img src={Photo8} alt="gallery" className='w-[220px]'/>
      </div>
    </div>
  );
}


export default Gallery 