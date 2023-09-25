import React, { useState } from 'react';
import {Logo} from '../assets/index';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

  const  handleClick = () => {
    setShowMenu(!showMenu)
    }

  return (
   <nav>
    <div className='flex justify-between w-[100%]'>
        <img src={Logo} alt="Logo" />
        <ul className='sm:flex gap-[50px] mt-4 hidden'>
        <li className='font-semibold hover:underline focus:underline text-lg'><a href="#">Home</a></li>
        <li className='font-semibold hover:underline focus:underline text-lg'><a href="#">Gallery</a></li>
        <li className='font-semibold hover:underline focus:underline text-lg'><a href="#">About us</a></li>
        <li className='font-semibold hover:underline focus:underline text-lg'><a href="#">How we help </a></li>
        </ul>
        <button className='mr-4 mb-[10px] bg-[#219d80] text-white px-1 mt-[10px] hidden sm:block text-lg'>Contact us</button>
        <div className='block sm:hidden m-4 ' onClick={handleClick}>
          {showMenu ? <AiOutlineClose size={30}  /> : <AiOutlineMenu size={30}  />}
        </div>
    </div>

    {
            showMenu && (
            <div className='block sm:hidden h-[50vh] w-[100%] z-[-1] sm:z-auto bg-[#edf7f5] pt-[50px] mt-[20px] transition-all ease-in duration-500' >
             <ul className='flex flex-col gap-[50px] ml-[20px]'>
                <li className='font-semibold hover:underline focus:underline text-xl'><a href="#">Home</a></li>
                <li className='font-semibold hover:underline focus:underline text-xl'><a href="#">Gallery</a></li>
                <li className='font-semibold hover:underline focus:underline text-xl'><a href="#">About us</a></li>
                <li className='font-semibold hover:underline focus:underline text-xl'><a href="#">How we help </a></li>
            </ul>
            <button className='ml-[20px] bg-[#219D80] text-white px-4 py-2 mt-[50px] text-2xl '>Contact us</button>
          </div>
        )}
    </nav>
  )
}

export default Navbar