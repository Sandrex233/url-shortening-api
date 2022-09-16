import React from 'react'

import Illustration from '../assets/illustration-working.svg'
import Illustrationm from '../assets/Illustraionm.svg'



const Header = () => {
    return (
        <div>
            <img src={Illustrationm} alt="" className='md:hidden flex' />
            <div className='flex justify-between items-center flex-row  mx-auto'>
                <div className='flex flex-col  mb-12 px-6 mx-auto mt-50'>
                    <h1 className='max-w-sm md:max-w-md text-5xl md:text-6xl font-bold text-[#232127] text-center md:text-left'>More than just shorter links</h1>
                    <p className='max-w-sm md:max-w-md text-lg mt-1 mb-10 text-gray-400 text-center md:text-left'>Build your brand’s recognition and get detailed insights
                        on how your links are performing.</p>
                    <div className="flex justify-center items-center md:justify-start">
                        <a href='/' className='p-3 px-7 transition ease-in-out text-sm text-white bg-[#2ACFCF]
                rounded-full baseline hover:opacity-70 font-medium md:block'>Get Started</a>
                    </div>
                </div>
                <div>
                    <img src={Illustration} alt="" className='hidden md:flex' />
                </div>
            </div>
        </div>
    )
}

export default Header