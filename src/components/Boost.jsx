import React from 'react'

const Boost = () => {
    return (
        <div className='mt-20'>
            <div id='boostbg' className='flex h-[300px] items-center justify-center'>
                <div className='flex flex-col mx-auto space-y-8'>
                    <h1 className='max-w-sm md:max-w-md text-3xl md:text-4xl font-bold text-white text-center md:text-left'>Boost your links today</h1>
                    <div className="flex items-center justify-center">
                        <a href='/' className='p-3 px-7 text-sm text-white bg-[#2ACFCF]
                rounded-full baseline hover:bg-[#85e6e6] transition ease-in-out font-medium md:block'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boost