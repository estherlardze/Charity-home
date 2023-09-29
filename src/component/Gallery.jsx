import React from 'react';
import {Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8} from '../assets/index'

const Gallery = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4" id='gallery'>
      <div className='grid-cols-2'>
        <img src={Photo1} alt="gallery" className='h-[50%]'/>
      </div>
      <div className='grid-cols-2'>
        <img src={Photo3} alt="gallery" className=''/>
      </div>
      <div className='grid-cols-3'>
      <img src={Photo4} alt="gallery" className='h-[50%]'/>
      </div>   
      <div className='grid-cols-3'>
      <img src={Photo6} alt="gallery" className='h-[100%]'/>
      </div>
      <div className='grid-cols-1'>
        <img src={Photo7} alt="gallery" className='h-[50%]'/>
      </div>
       <div  className='grid-cols-2'>
        <img src={Photo2} alt="gallery" className='h-[90%]'/>
      </div> 
      <div  className='grid-cols-2'>
      <img src={Photo5} alt="gallery" className='h-[90%]' />
      </div> 
      <div  className='grid-cols-2'>
        <img src={Photo8} alt="gallery" className='h-[90%]'/>
      </div>
    </div>
  );
}


export default Gallery 