import React, { useState } from 'react';
import {Logo, arrow} from '../assets/index';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = ({onGalleryClick, onAboutClick}) => {

   const [showMenu, setShowMenu] = useState(false)

  const  handleClick = () => {
    setShowMenu(!showMenu)
    }

  return (
   <nav>
    <div className='flex justify-between w-[96%] mx-[2%]'>
        <img src={Logo} alt="Logo" />
        <ul className='md:flex gap-[50px] mt-4 hidden'>
          <li className='font-semibold hover:underline focus:underline text-lg'><a href="#">Home</a></li>
          <li className='font-semibold hover:underline focus:underline text-lg' onClick={onGalleryClick}><a>Gallery</a></li>
          <li className='font-semibold hover:underline focus:underline text-lg flex gap-2' 
           onClick={onAboutClick}
           >
            <a>About us</a><img src={arrow} alt="down arrow" className='w-[10px] h-[5px] mt-3 '/>
          </li>
          <li className='font-semibold hover:underline focus:underline text-lg flex gap-2'>
            <a href="#">How we help</a><img src={arrow} alt="down arrow" className='w-[10px] h-[5px] mt-3'/>
          </li> 
         </ul>
        <button className='bg-[#219d80] text-white px-3 my-[10px] hidden md:block text-lg transition-all hover:bg-white border-2 border-[#219d80] hover:text-[#219d80]'>
          Contact us
        </button>
        <div className='block md:hidden m-4 ' onClick={handleClick}>
          {showMenu ? <AiOutlineClose size={30}  /> : <AiOutlineMenu size={30}  />}
        </div>
    </div>

    {
            showMenu && (
            <div className='block md:hidden h-[50vh] w-[100%] z-[10] md:z-auto bg-[#edf7f5] py-[30px] mt-[20px]  transition-all ease-in-out duration-3000'>
             <ul className='flex flex-col gap-[30px] ml-[20px]'>
               <li className='font-semibold hover:underline focus:underline text-lg'>Home</li>
               <li className='font-semibold hover:underline focus:underline text-lg cursor-pointer' onClick={onGalleryClick}>Gallery</li>
               <li className='font-semibold hover:underline focus:underline text-lg flex gap-2 cursor-pointer' onClick={onAboutClick}>
                   <a href="#">About us</a><img src={arrow} alt="down arrow" className='w-[10px] h-[5px] mt-3'/>
               </li>               
               <li className='font-semibold hover:underline focus:underline text-lg flex gap-2'>
                <a href="#">How we help</a><img src={arrow} alt="down arrow" className='w-[10px] h-[5px] mt-3'/>
               </li>           
               </ul>
            <button className='ml-[20px] bg-[#219D80] text-white px-4 py-2 mt-[30px] text-2xl font-semibold'>Contact us</button>
          </div>
        )}
    </nav>
  )
}

export default Navbar