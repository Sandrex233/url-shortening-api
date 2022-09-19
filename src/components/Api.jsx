import React, { useState } from 'react'

const Api = ({ setInputValue }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value)
        setValue("")
    }

    return (
        <div className='mt-10'>
            <div id='shortenbg'
                className='max-w-[350px] md:max-w-5xl h-[150px]  mx-auto flex justify-center 
                            items-center space-y-7 md:space-x-6 md:space-y-0  flex-col md:flex-row rounded-lg'>
                <div>
                    <input
                        type="text"
                        className='w-[303px] md:w-[700px] h-11 rounded-lg pl-3'
                        placeholder='Shorten a link here...'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className=''>
                    <button onClick={handleClick} className='transition ease-in-out p-3 px-28 md:px-10 text-sm text-white bg-[#2ACFCF]
                rounded-lg  baseline hover:bg-[#85e6e6] tracking-wider md:block'>
                        Shorten It!
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Api