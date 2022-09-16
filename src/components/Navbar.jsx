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
                    className={!nav
                        ? 'hidden'
                        : 'absolute top-[100px] left-[60px] w-2/3 h-1/3 bg-white flex flex-col justify-center space-y-4 items-center text-gray-500'}>
                    <li onClick={handleClick} className='hover:text-black cursor-pointer'>Features</li>
                    <li onClick={handleClick} className='hover:text-black cursor-pointer'>Pricing</li>
                    <li onClick={handleClick} className='hover:text-black cursor-pointer'>Resources</li>
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