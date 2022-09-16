import React from 'react'
import Brand from '../assets/icon-brand-recognition.svg'
import Detailed from '../assets/icon-detailed-records.svg'
import Fully from '../assets/icon-fully-customizable.svg'

const Features = () => {
    return (
        <div className='max-w-[1000px] mx-auto p-4 mt-32 flex flex-col justify-center w-full h-full'>
            <div className='flex items-center justify-center flex-col'>
                <h1 className='text-4xl font-bold text-[#232127] text-center inline'>Advanced Statistics</h1>
                <p className='max-w-sm md:max-w-lg py-4 font-normal text-gray-400 text-center'>Track how your links are performing across the web with our
                    advanced statistics dashboard.</p>
            </div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center space-x-4 py-8'>
                <div className='space-y-6 py-7'>
                    <img src={Brand} alt="" className='mx-auto md:mx-0 rounded-full w-45' />
                    <h1 className='max-w-md text-2xl font-bold sm:text-left text-[#232127] text-center'>Brand Recognition</h1>
                    <p className='max-w-sm  mx-auto md:mx-0 text-center text-gray-400 sm:text-left'>Boost your brand recognition with each click. Generic links don’t
                        mean a thing. Branded links help instil confidence in your content.
                    </p>
                </div>
                <div className='space-y-6 py-7 md:mt-12'>
                    <img src={Detailed} alt="" className='mx-auto md:mx-0 rounded-full w-35' />
                    <h1 className='max-w-md text-2xl font-bold text-[#232127] sm:text-left text-center'>Detailed Records</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center  text-gray-400 sm:text-left'>Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.</p>
                </div>
                <div className='space-y-6 py-7 md:mt-24'>
                    <img src={Fully} alt="" className='mx-auto md:mx-0  rounded-full w-35' />
                    <h1 className='max-w-md text-2xl font-bold sm:text-left text-[#232127] text-center'>Fully Customizable</h1>
                    <p className='max-w-sm mx-auto md:mx-0 text-center text-gray-400 sm:text-left'>Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.</p>
                </div>

            </div>
        </div>
    )
}

export default Features