'use client'

import React, { useEffect, useState, useRef } from "react";
import './Header.css'

const Header = ({ handleToggleModal }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideAnimation');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);
    return (
        <>
            <div className='lg:flex hidden justify-between  lg:px-28 bg-white '>
            {/* <div className='flex  justify-between hideAnimation lg:px-28 bg-white '> */}
                <div className='bg-[#012F6D] overflow-hidden group py-7 px-9 flex-col lg:max-w-[138px] h-full flex justify-center items-center'>
                    <div className='flex group-hover:scale-110 transition-all duration-500 ease-in-out justify-center items-center w-full'>
                        <img src='/Images/capitaltext.png' className='max-w-[46px]'></img>
                    </div>
                    <div className='flex group-hover:scale-110 transition-all duration-500 ease-in-out mt-2 justify-center items-center w-full'>
                        <img src='/Images/ewfwhitetext.png' className='max-w-[79px]'></img>
                    </div>
                </div>

                <div className='lg:hidden  flex items-center justify-center'>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9217 17.2197C18.4966 16.7975 17.8151 16.7975 17.3898 17.2197C17.1694 17.4418 17.0454 17.7435 17.0454 18.0581C17.0454 18.3278 17.1365 18.5878 17.3014 18.7965L17.3898 18.8963L19.7219 21.569C20.2904 22.1437 21.2122 22.1437 21.7807 21.569C22.3491 20.9945 22.3491 20.0628 21.7807 19.4881H21.7319L18.9217 17.2197ZM16.3144 2.7933C14.5448 1.00478 12.1449 0 9.64246 0C4.43142 0 0.207031 4.26983 0.207031 9.53694C0.207031 14.804 4.43142 19.0739 9.64246 19.0739C14.8535 19.0739 19.0779 14.804 19.0779 9.53694C19.0779 7.00758 18.0838 4.58182 16.3144 2.7933ZM9.70703 17C13.8492 17 17.207 13.6421 17.207 9.5C17.207 5.35786 13.8492 2 9.70703 2C5.5649 2 2.20703 5.35786 2.20703 9.5C2.20703 13.6421 5.5649 17 9.70703 17Z" fill="#012F6D" />
                    </svg>
                </div>


                <div className='flex items-center gap-8'>
                    {/* <div className='lg:block hidden transform hover:scale-110 transition-transform duration-500' >
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9217 17.2197C18.4966 16.7975 17.8151 16.7975 17.3898 17.2197C17.1694 17.4418 17.0454 17.7435 17.0454 18.0581C17.0454 18.3278 17.1365 18.5878 17.3014 18.7965L17.3898 18.8963L19.7219 21.569C20.2904 22.1437 21.2122 22.1437 21.7807 21.569C22.3491 20.9945 22.3491 20.0628 21.7807 19.4881H21.7319L18.9217 17.2197ZM16.3144 2.7933C14.5448 1.00478 12.1449 0 9.64246 0C4.43142 0 0.207031 4.26983 0.207031 9.53694C0.207031 14.804 4.43142 19.0739 9.64246 19.0739C14.8535 19.0739 19.0779 14.804 19.0779 9.53694C19.0779 7.00758 18.0838 4.58182 16.3144 2.7933ZM9.70703 17C13.8492 17 17.207 13.6421 17.207 9.5C17.207 5.35786 13.8492 2 9.70703 2C5.5649 2 2.20703 5.35786 2.20703 9.5C2.20703 13.6421 5.5649 17 9.70703 17Z" fill="#012F6D" />
                        </svg>
                    </div> */}
                    <div className='flex different-mouse bg-[#012F6D] transform hover:scale-110 transition-transform duration-500 px-9 py-3 items-center justify-center gap-3'>
                        <div>
                            <p className='font-bold text-base text-white'>Join Us</p>
                        </div>
                        <div>
                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.251 6.53814C18.5439 6.24525 18.5439 5.77038 18.251 5.47748L13.4781 0.704512C13.1852 0.411618 12.7103 0.411618 12.4174 0.704512C12.1245 0.997405 12.1245 1.47228 12.4174 1.76517L16.66 6.00781L12.4174 10.2505C12.1245 10.5433 12.1245 11.0182 12.4174 11.3111C12.7103 11.604 13.1852 11.604 13.4781 11.3111L18.251 6.53814ZM0.720703 6.75781H17.7207V5.25781H0.720703V6.75781Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            <div className='relative bg-[#012F6D] lg:hidden flex w-full justify-between px-4 py-7'>
                <div className=''>
                    <div className='bg-[#012F6D]   flex-col lg:max-w-[138px] h-full flex justify-center items-center'>
                      
                        <div className='flex mt-2 justify-center items-center w-full'>
                            <img src='/Images/ewfwhitetext.png' className='max-w-[79px]'></img>
                        </div>
                    </div>
                </div>
                <div className='absolute z-50 top-1/2 transform -translate-x-1/2 -translate-y-1/2 right-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="13" viewBox="0 0 21 13" fill="none" onClick={() => { handleToggleModal() }}>
                        <rect width="21" height="3" rx="1" fill="white" />
                        <rect y="5" width="21" height="3" rx="1" fill="white" />
                        <rect y="10" width="21" height="3" rx="1" fill="white" />
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Header;