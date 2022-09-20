import React, { useState } from 'react'

import Logo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className='flex items-center justify-between px-20 p-6'>
            <div className='flex flex-row'>
                <img src={Logo} alt="" />

                <ul className='hidden md:flex items-center justify-center gap-5 font-normal ml-10 text-gray-400'>
                    <li className='hover:text-black cursor-pointer'>Features</li>
                    <li className='hover:text-black cursor-pointer'>Pricing</li>
                    <li className='hover:text-black cursor-pointer'>Resources</li>


                </ul>

                <ul
                    className={nav
                        ? 'md:hidden fixed left-[15%] top-20 flex flex-col space-y-6 items-center justify-center rounded-xl w-3/4 h-2/4 bg-[#42385f] ease-in duration-300 z-10'
                        : 'hidden'}
                >
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Features</li>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Pricing</li>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Resources</li>
                    <div className='border border-gray-300 w-2/4'></div>
                    <li onClick={handleClick} className='text-white text-lg cursor-pointer'>Login</li>
                    <a href='/' className='md:hidden p-3 px-16 transition ease-in-out text-base text-white bg-[#2ACFCF]
                rounded-full font-medium block'>Sign Up</a>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars color='gray' size={20} /> : <FaTimes color='gray' size={20} />}
            </div>

            <div className='hidden md:flex flex-row justify-center space-x-6 items-center'>
                <ul>
                    <li className='hover:text-black cursor-pointer text-gray-400'>Login</li>
                </ul>
                <a href='/' className='hidden p-3 px-7 transition ease-in-out text-sm text-white bg-[#2ACFCF]
                rounded-full baseline hover:opacity-70 font-medium md:block'>Sign Up</a>
            </div>



        </div>
    )
}

export default Navbar