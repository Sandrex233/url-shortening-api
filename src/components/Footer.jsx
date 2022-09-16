import React from 'react'

import Logowhite from '../assets/logowhite.svg'
import Facebook from '../assets/icon-facebook.svg'
import Twitter from '../assets/icon-twitter.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Instagram from '../assets/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='bg-[#232127]'>
            <div className='container flex flex-col-reverse justify-between px-8 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
                <div className='flex flex-col items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>

                    <div className=''>
                        <img src={Logowhite} alt="" className='h-8' />
                    </div>



                    <div className='md:hidden flex justify-center space-x-32'>
                        <div className='flex flex-col space-y-10 text-center text-[#BFBFBF]'>
                            <div className='flex flex-col space-y-3 text-center'>
                                <h1 className='text-white font-bold mb-3'>Features</h1>
                                <a href="/">Link Shortening</a>
                                <a href="/">Branded Links</a>
                                <a href="/">Analytics</a>
                            </div>

                            <div className='flex flex-col space-y-3 text-center'>
                                <h1 className='text-white font-bold mb-3'>Resources</h1>
                                <a href="/">Blog</a>
                                <a href="/">Developers</a>
                                <a href="/">Support</a>
                            </div>
                            <div className='flex flex-col space-y-3 text-center'>
                                <h1 className='text-white font-bold mb-3'>Company</h1>
                                <a href="/">About</a>
                                <a href="/">Our Team</a>
                                <a href="/">Careers</a>
                                <a href="/">Contact</a>
                            </div>
                        </div>
                    </div>


                    <div className='md:hidden flex justify-center space-x-8'>
                        <a href="/">
                            <img src={Facebook} alt="" className='h-7' />
                        </a>
                        <a href="/">
                            <img src={Twitter} alt="" className='h-7' />
                        </a>
                        <a href="/">
                            <img src={Pinterest} alt="" className='h-7' />
                        </a>
                        <a href="/">
                            <img src={Instagram} alt="" className='h-7' />
                        </a>
                    </div>


                </div>



                <div className='hidden md:flex justify-center  space-x-16'>
                    <div className='flex flex-col space-y-3 text-[#BFBFBF]'>
                        <h1 className='text-white font-bold mb-3'>Features</h1>
                        <a href="/" className="hover:text-[#2ACFCF]">Link Shortening</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Branded Links</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Analytics</a>

                    </div>
                    <div className='flex flex-col space-y-3 text-[#BFBFBF]'>
                        <h1 className='text-white font-bold mb-3'>Resources</h1>
                        <a href="/" className="hover:text-[#2ACFCF]">Blog</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Developers</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Support</a>

                    </div>
                    <div className='flex flex-col space-y-3 text-[#BFBFBF]'>
                        <h1 className='text-white font-bold mb-3'>Company</h1>
                        <a href="/" className="hover:text-[#2ACFCF]">About</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Our Team</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Careers</a>
                        <a href="/" className="hover:text-[#2ACFCF]">Contact</a>
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <div className='hidden md:flex space-x-3'>
                        <div className='flex justify-center space-x-4'>
                            <a href="/">
                                <img src={Facebook} alt="" className='h-7 hovered' />
                            </a>
                            <a href="/">
                                <img src={Twitter} alt="" className='h-7 hovered' />
                            </a>
                            <a href="/">
                                <img src={Pinterest} alt="" className='h-7 hovered' />
                            </a>
                            <a href="/">
                                <img src={Instagram} alt="" className='h-7 hovered' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer