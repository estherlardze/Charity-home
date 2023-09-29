import React from 'react';
import {Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8} from '../assets/index'

const Gallery = () => {

  return (
    <div
       className="flex w-[100%] flex-col lg:flex-row mt-5 align-center justify-center "
    >
      <div data-aos="fade" data-aos-delay="300" 
        className="flex flex-row justify-center 
        gap-5 mb-5 lg:flex-col lg:justify-start 
        lg:items-center lg:mb-0">
        <img src={Photo1} alt="children learning" className="w-[40%] h-[40%] lg:w-[264px] lg:h-[258px]" /> 
        <img src={Photo2} alt="parents" className="w-[40%] h-[40%] lg:w-[213px] lg:h-[223px] lg:mt-5" /> 
      </div>

      <div data-aos="fade" data-aos-delay="800"
        className="md:ml-44 lg:ml-5">
        <img src={Photo3} alt="student" className="mb-5 md:w-[450px] lg:w-[344px] lg:h-[532px]" />
      </div>
      
      <div data-aos="fade" data-aos-delay="1000"
        className="flex flex-col gap-5 lg:gap-0 ml-5 items-center">
        <img src={Photo4} alt="student writing" className="w-[85%] lg:w-[437px] lg:h-[258px]" />

        <img src={Photo5} alt="kids learning" 
        className=" w-[85%] h-[258px] lg:w-[306px] 
        lg:h-[258px] lg:mt-[30px]"/>
      </div>
      
      <div data-aos="fade" data-aos-delay="1200"
        className="md:ml-52 lg:ml-0">
        <img src={Photo6} alt="teachers" 
        className="w-[85%] ml-4 mt-5 lg:mt-0 lg:w-[440px] 
        lg:h-[546px] " />
      </div>
      
      <div data-aos="fade" data-aos-delay="1500"
        className="flex flex-row lg:flex-col mt-5 
        gap-5 lg:gap-0 lg:mt-0 ml-10 md:ml-32 
        items-center lg:justify-end lg:ml-5">

        <img src={Photo7} alt="student learning" 
          className="w-[40%] h-[40%] lg:w-[206px] lg:h-[207px]"/>

        <img src={Photo8} alt="staff"
          className="w-[30%] h-[40%] md:w-[40%] lg:w-[277px] 
          lg:h-[258px] lg:mt-[30px]" />

      </div>
    </div>
  );
}


export default Gallery 

