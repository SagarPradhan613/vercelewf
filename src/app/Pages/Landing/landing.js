'use client'

import React, { useEffect, useState, useRef } from "react";
import './landing.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Landing = () => {
    const boxRef = useRef(null);
    const viewRef = useRef(null);

    // top direction Animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        entry.target.classList.add('bottom-to-top');
                        entry.target.classList.remove('hideTopAnimation');
                    }, 1000); // Remove class after 2 seconds
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideTopAnimation');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            // Clean up observer on component unmount
            observer.disconnect();
        };
    }, []);

    // top direction Animation without delay

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {
                    entry.target.classList.add('bottom-to-top');
                    entry.target.classList.remove('hideTopAnimation');

                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideTopAnimationnodelay');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            // Clean up observer on component unmount
            observer.disconnect();
        };
    }, []);

    // show Animation
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

    // left to right animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {
                    entry.target.classList.add('left-to-right');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideLeftAnimation');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    // right to left Animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {
                    entry.target.classList.add('right-to-left');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideRightAnimation');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);


    // delay animation

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {
                    entry.target.classList.add('delayShow');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.hideDelay');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    // slow hide Animation

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        entry.target.classList.add('slowly-hidden');
                        entry.target.classList.remove('slowly-visible');
                    }, 500); // Remove class after 2 seconds
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.slowly-visible');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            // Clean up observer on component unmount
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry, "entryyyyyyy");
                if (entry.isIntersecting) {

                    setTimeout(() => {
                        entry.target.classList.add('slowly-hidden');
                        entry.target.classList.remove('slowly-visible-icons');
                    }, 1000); // Remove class after 2 seconds
                }
            });
        });

        const hiddenElements = document.querySelectorAll('.slowly-visible-icons');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            // Clean up observer on component unmount
            observer.disconnect();
        };
    }, []);


    // const handleNext = () => {
    //     let width = boxRef.current.clientWidth;

    //     boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;

    //     console.log(width);

    // }

    // const handlePrev = () => {
    //     let width = boxRef.current.clientWidth;

    //     boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    //     console.log(width);

    // }


    const handleNext = () => {
        const width = boxRef.current.clientWidth;
        const scrollWidth = boxRef.current.scrollWidth;
        const scrollLeft = boxRef.current.scrollLeft;

        if (scrollLeft + width >= scrollWidth) {
            // If at the end, scroll to the start
            boxRef.current.scrollLeft = 0;
        } else {
            // Otherwise, scroll normally
            boxRef.current.scrollLeft = scrollLeft + width;
        }
    };

    const handlePrev = () => {
        const width = boxRef.current.clientWidth;
        const scrollWidth = boxRef.current.scrollWidth;
        const scrollLeft = boxRef.current.scrollLeft;

        if (scrollLeft === 0) {
            // If at the start, scroll to the end
            boxRef.current.scrollLeft = scrollWidth;
        } else {
            // Otherwise, scroll normally
            boxRef.current.scrollLeft = scrollLeft - width;
        }
    };


    const contact = useRef(null);
    const plans = useRef(null);
    const book = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <>
            {/* first box */}
            <div className="w-full overflow-hidden lg:py-28  lg:pb-44 px-4 lg:px-0 py-10 pb-28 relative hero-section ">
                <div className='flex  flex-col lg:flex-row'>
                    <div className="w-full left-to-right lg:pl-28  lg:w-1/2">
                        <div>
                            <img src='/Images/herofulltext.png'></img>
                        </div>
                        <div className='mt-10'>
                            <p className='tiro-regular responsive-firstSec-header font-normal text-6xl text-[#012F6D]'>Guiding your <br></br> crypto investments to unforeseen heights</p>
                        </div>
                    </div>

                    <div className="w-full  flex flex-col pt-6 lg:pt-0 justify-between lg:pr-28 lg:pl-20 lg:w-1/2">
                        <p className='text-[#012F6D] right-to-left font-normal leading-7 responsive-firstSec-para text-base'>EWF Capital is at the forefront of unlocking the transformative potential of cryptocurrency investments. Founded in 2017 with a vision to redefine the landscape of digital asset investing, our expertly crafted strategies are designed to navigate the volatility of the crypto markets, targeting substantial returns for our investors.</p>

                        <div className='flex slowly-visible responsive-firstSec-margin  relative z-50 gap-8 pt-6 lg:pt-0'>
                            <div onClick={() => scrollToSection(contact)} className='bg-[#F6161E] different-mouse transform hover:scale-110 transition-transform duration-500 w-[169px] py-3 text-white flex items-center justify-center gap-3'>
                                <p className='text-base font-bold'>Contact Us</p>
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.251 6.9483C18.5439 6.65541 18.5439 6.18053 18.251 5.88764L13.4781 1.11467C13.1852 0.821774 12.7103 0.821774 12.4174 1.11467C12.1245 1.40756 12.1245 1.88243 12.4174 2.17533L16.66 6.41797L12.4174 10.6606C12.1245 10.9535 12.1245 11.4284 12.4174 11.7213C12.7103 12.0142 13.1852 12.0142 13.4781 11.7213L18.251 6.9483ZM0.720703 7.16797H17.7207V5.66797H0.720703V7.16797Z" fill="white" />
                                </svg>
                            </div>

                            <div onClick={() => scrollToSection(plans)} className='bg-white different-mouse transform hover:scale-110 transition-transform duration-500 border border-[#012F6D] w-[169px] py-3 text-[#012F6D] flex items-center justify-center gap-8'>
                                <p className='text-base font-bold '>Our Plans</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mb-10 md:mb-0 slowly-visible-icons gap-10 w-full lg:bottom-10 bottom-5 right-[10%] absolute justify-end'>
                    <div className="icon-360 different-mouse">
                        <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3769 4.2892C19.3769 4.2892 3.73608 0.453939 1.64357 0.3109L1.64131 0.308664C1.40204 0.308664 1.25757 0.286314 1.13568 0.286314C0.918976 0.286314 0.727106 0.3109 0.630042 0.33325C0.390769 0.429356 0.318535 0.525459 0.246302 0.690849C0.126665 1.04845 0.318536 1.6452 0.318536 1.6452C0.318536 1.6452 7.9956 22.7794 8.8624 23.9952C9.02944 24.2567 9.15134 24.3282 9.27097 24.3752C9.87141 24.5897 10.1355 23.946 10.1355 23.946L11.9414 18.4904C11.9414 18.4904 11.9639 18.2758 11.9188 18.2043C11.1242 16.9661 3.95278 5.74195 3.73608 5.09827C3.68868 4.97982 3.73608 4.91053 3.78349 4.93288C4.72252 5.19438 13.4808 14.939 13.4808 14.939C13.4808 14.939 13.5057 14.9882 13.5779 15.0127L13.6276 15.0351L13.675 15.0351L19.185 15.5357C19.5213 15.5357 20.1715 15.4396 19.4017 14.5121C19.2816 14.361 19.1527 14.217 19.0157 14.0807L18.9931 14.0584C18.7216 13.7868 18.4567 13.5089 18.1986 13.2247C17.5259 12.5341 16.9706 11.8904 16.5869 11.4613C16.5208 11.3763 16.4484 11.2964 16.3702 11.2222C17.6929 9.3403 19.1376 7.33998 19.8825 6.45715C20.0286 6.31512 20.1427 6.14414 20.2174 5.95541C20.292 5.76669 20.3256 5.56447 20.3159 5.362C20.2933 4.52835 19.3769 4.2892 19.3769 4.2892Z" fill="#F6161E" />
                        </svg>
                    </div>
                    <div className="icon-360 different-mouse">
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8508 16.0839C20.8508 7.28449 13.1203 2.46749 6.42079 2.46749C6.20627 2.46749 5.99176 2.46749 5.76384 2.48045C5.04362 1.53906 4.15505 0.729753 3.14009 0.0907344C3.5423 0.949942 3.81044 1.87395 3.94451 2.8472C3.29757 1.84026 2.29868 1.09082 1.12904 0.734816C1.71895 1.65882 2.13456 2.68261 2.36248 3.78287C1.85259 4.22041 1.44438 4.75743 1.16477 5.35853C0.885147 5.95963 0.74046 6.61117 0.740234 7.27024C0.740234 9.91525 3.01809 12.0652 5.81747 12.0652C6.21968 12.0652 6.59508 12.0147 6.97047 11.9382C6.76937 15.909 4.73284 19.4365 1.66532 21.8003C2.44577 22.226 3.32725 22.4484 4.22338 22.4457C5.9797 22.4457 7.53357 21.5981 8.4439 20.3204C8.41728 21.0799 8.20109 21.8219 7.81378 22.4833L7.88081 22.4833C10.3343 22.4833 12.3963 20.8271 12.8521 18.6525C12.9728 19.0568 13.0264 19.4741 13.0264 19.9173C13.0264 20.2206 12.9996 20.5238 12.9326 20.8141C14.9557 20.2076 16.4157 18.4374 16.4559 16.3392C17.8627 18.0209 18.6294 20.1185 18.6279 22.2811C18.6279 22.6608 18.6145 23.0522 18.5608 23.4189C20.0561 21.2459 20.8528 18.6938 20.8508 16.0839Z" fill="#F6161E" />
                        </svg>
                    </div>
                    <div className="icon-360 different-mouse">
                        <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.94417 3.90484C1.15853 5.46898 0.598077 7.11976 0.276854 8.81584C0.273599 8.83136 0.275803 8.84743 0.283149 8.86174C0.290495 8.87604 0.302607 8.88786 0.317746 8.89548C0.730617 9.10664 1.26748 9.34193 1.69091 9.50603C1.38723 11.3349 1.38723 13.1951 1.69091 15.024C1.2215 15.2079 0.763523 15.4154 0.319065 15.6454C0.304433 15.6532 0.292709 15.6648 0.285416 15.6788C0.278123 15.6928 0.2756 15.7085 0.278174 15.7238C0.598336 17.42 1.15837 19.0708 1.94417 20.6348C1.95008 20.6487 1.96071 20.6606 1.97451 20.6686C7.0833 23.7974 12.0681 24.6541 16.9896 24.233C17.0017 24.2318 17.0134 24.2284 17.024 24.223C17.0347 24.2177 17.0441 24.2104 17.0516 24.2016C18.5269 22.3801 19.6532 20.3424 20.3822 18.1757C20.3873 18.1605 20.3871 18.1442 20.3817 18.1291C20.3763 18.1139 20.3659 18.1007 20.3519 18.0912C19.6581 17.6267 18.9273 17.2128 18.1596 16.858C18.1491 16.8531 18.1375 16.8503 18.1257 16.8498C18.1139 16.8493 18.1021 16.8511 18.0911 16.8551C18.0801 16.8591 18.0702 16.8652 18.062 16.873C18.0538 16.8808 18.0475 16.8901 18.0435 16.9003C17.7713 17.5505 17.4431 18.1799 17.0621 18.7826C17.0552 18.7936 17.0454 18.8028 17.0336 18.8095C17.0219 18.8162 17.0085 18.8201 16.9947 18.8209C16.9809 18.8218 16.967 18.8195 16.9544 18.8143C16.9418 18.8091 16.9308 18.8011 16.9223 18.7911C16.8181 18.6644 16.7113 18.5377 16.6018 18.417C16.592 18.4063 16.5857 18.3932 16.5836 18.3794C16.5815 18.3655 16.5837 18.3514 16.5899 18.3386C18.5619 14.3893 18.5619 10.113 16.5899 6.21072C16.5832 6.19789 16.5806 6.1836 16.5825 6.16949C16.5844 6.15539 16.5906 6.14207 16.6004 6.13108C16.7099 6.01042 16.8181 5.88493 16.9223 5.75702C16.9306 5.74688 16.9414 5.73876 16.9539 5.73336C16.9664 5.72795 16.9802 5.72544 16.994 5.72604C17.0078 5.72663 17.0212 5.73032 17.0331 5.73677C17.045 5.74323 17.0549 5.75225 17.0621 5.76306C17.446 6.36516 17.7705 6.9902 18.0422 7.64661C18.0464 7.65674 18.053 7.66593 18.0614 7.67359C18.0698 7.68125 18.0798 7.68722 18.0909 7.69109C18.102 7.69496 18.1138 7.69665 18.1256 7.69606C18.1375 7.69546 18.1491 7.69259 18.1596 7.68763C18.9273 7.32564 19.6568 6.91177 20.3493 6.45687C20.3638 6.44781 20.3749 6.43474 20.3808 6.41956C20.3868 6.40438 20.3872 6.38786 20.3822 6.37241C19.6557 4.2014 18.5293 2.1598 17.0516 0.335618C17.0445 0.32674 17.0354 0.319347 17.0249 0.313937C17.0145 0.308526 17.0029 0.305225 16.9909 0.304248C11.3004 -0.198918 6.3578 1.14768 1.97451 3.87226C1.96062 3.87907 1.94986 3.89141 1.94417 3.90484ZM13.9926 16.268C13.9926 17.4565 12.7989 18.4363 11.3334 18.4363C9.86919 18.4363 8.67543 17.4758 8.67543 16.268C8.67543 15.0493 9.87842 14.0792 11.3334 14.0985C12.7989 14.0985 13.9926 15.059 13.9926 16.268ZM13.9926 8.24872C13.9926 9.43846 12.7989 10.417 11.3334 10.417C9.86919 10.417 8.67543 9.45656 8.67543 8.24872C8.67543 7.03123 9.87842 6.06109 11.3334 6.0804C12.7989 6.0804 13.9926 7.03123 13.9926 8.24872Z" fill="#F6161E" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* second box */}

            <div className='w-full  md:mt-0   lg:px-0 lg:pt-64 lg:pb-36 lg:pl-28 pt-32 pb-16  flex flex-col lg:flex-row relative bg-[#012F6D]  second-section'>
                <div className='absolute group transform hover:scale-110 transition-transform duration-1000 flex flex-col justify-between lg:left-28 -top-10 bg-[#F6161E] lg:w-[389px] lg:h-[300px]  w-[250px]  px-4 py-8 lg:py-10 lg:px-10'>
                    <p className='tiro text-white text-3xl lg:text-5xl'>
                        A Glance<br />
                        <span className="tiro-regular">
                            At Past<br />
                            Investments
                        </span>
                    </p>

                    <div onClick={() => scrollToSection(contact)} c className='flex w-full mt-6 lg:mt-0 justify-between'>
                        <p className='lg:text-base text-xs font-semibold inter text-white'>Request an update</p>

                        <div className="rotate-360 transition duration-500 ease-in-out">
                            <svg className="" width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.7189 13.0334C34.3046 12.4476 34.3046 11.4979 33.7189 10.9121L24.1729 1.36617C23.5871 0.780388 22.6374 0.780388 22.0516 1.36617C21.4658 1.95196 21.4658 2.90171 22.0516 3.4875L30.5369 11.9728L22.0516 20.4581C21.4658 21.0438 21.4658 21.9936 22.0516 22.5794C22.6374 23.1652 23.5871 23.1652 24.1729 22.5794L33.7189 13.0334ZM0.495117 13.4728L32.6582 13.4728L32.6582 10.4728L0.495117 10.4728L0.495117 13.4728Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                </div>


                <div className='lg:w-1/2 hideTopAnimation w-full'>
                    <div className='mt-20  px-4 lg:px-0'>
                        <div>
                            <p className='text-white font-bold text-base opacity-50'>Updated on March </p>
                            <div className='flex w-full  justify-between mt-2'>
                                <div className='text-white font-normal inter'>
                                    <p className='font-medium text-xl lg:text-3xl'>Overall
                                        <br />
                                        Investment</p>
                                </div>

                                <div className='flex text-white'>
                                    <p className='font-bold responsive-second-numbers lg:text-7xl text-3xl'>14.04</p>
                                    <p className='font-bold responsive-second-numbers lg:text-7xl text-3xl ml-6'>M</p>
                                    <p className='font-bold lg:text-3xl text-xl ml-1'>$</p>
                                </div>

                            </div>
                            <div className='w-full h-[1px] mt-10 bg-[rgba(199,199,199,0.5)]'>

                            </div>
                        </div>

                        <div className='mt-10'>
                            <p className='text-white font-bold text-base opacity-50'>Updated on March </p>
                            <div className='flex w-full justify-between mt-2'>
                                <div className='text-white'>
                                    <p className='font-medium inter text-xl lg:text-3xl'>Last Year
                                        <br />
                                        Investment</p>
                                </div>

                                <div className='flex text-white'>
                                    <p className='font-bold lg:text-7xl text-3xl responsive-second-numbers'>6.17 M</p>
                                    {/* <p className='font-bold lg:text-3xl text-xl ml-1'>M</p> */}
                                </div>

                            </div>
                            <div className='w-full h-[1px] mt-10 bg-[rgba(199,199,199,0.5)]'>

                            </div>
                        </div>

                        <div className='w-full mt-10  flex items-center'>
                            <div className='flex responsive-secondBox-flex directionLeft justify-between  w-1/2 items-center pr-10'>
                                <div className='text-white inter font-medium flex lg:block gap-2  text-xl lg:text-2xl'>
                                    <p>Total</p>
                                    <p>Return (%)</p>
                                </div>

                                <div className=' text-3xl responsive-total-text ml- lg:text-4xl text-white font-bold'>
                                    <p>708,600%</p>
                                </div>
                            </div>

                            <div className='flex w-[1px] bg-white h-[60px]'>

                            </div>

                            <div className='flex responsive-secondBox-flex-right directionRight justify-between pl-10 w-1/2 items-center'>
                                <div className='text-white inter font-medium flex gap-2 lg:block text-xl lg:text-2xl'>
                                    <p>Total</p>
                                    <p>ROI (x)</p>
                                </div>

                                <div className=' text-3xl responsive-total-text  lg:text-4xl text-white font-bold'>
                                    <p>7,086X</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="lg:w-1/2  hideTopAnimation w-full mt-8 lg:mt-0 lg:pl-28">
                    <div className="w-full  px-4 lg:px-0 flex justify-start items-start">
                        <p className="tiro responsive-second-head text-3xl lg:text-5xl text-white">our early<span className="tiro-regular ml-2">Investments</span> </p>
                    </div>

                    <div ref={boxRef} className="carousel-container  mt-10 scroll-smooth w-full relative overflow-hidden flex h-full">
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/cardpp1.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Celestia</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Celestia (TIA) is the first modular blockchain network that enables anyone to easily deploy their own blockchain with minimal overhead.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.01</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">2,085X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500">
                                        <img src="/Images/cardpp2.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Injective</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Injective is a blockchain built for finance. It is an open, interoperable layer-one blockchain powering next-generation DeFi applications.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.083</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">541 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/bandpp.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Band</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Band Protocol is a cross-chain data oracle which takes real-world data and supplies it to on-chain apps, while also connecting APIs to smart contracts.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.3</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">76 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/uniswap.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Uniswap</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Uniswap is a popular decentralized trading protocol, known for its role in facilitating automated trading of decentralized finance (DeFi) tokens.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.045</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">1,000 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/Hedera.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Hedera</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Hedera is the enterprise-grade public network for the decentralized economy that allows individuals and businesses to create powerful DApps.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl"> 0.001</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">570 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/Cronos.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">Cronos</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">Cronos chain is a decentralized, open-source blockchain developed by the Crypto.com payment, trading and financial services company.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.1</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">9.6 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-card group transition-all duration-500 ease-in-out hover:scale-110 relative z-10 flex flex-col justify-between px-10 py-10 h-[85%] mx-3 min-w-[300px] bg-white">
                            <div className="overlay top-0 1-20 left-0 h-full w-full absolute">

                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="group-hover:rotate-180 transition-all duration-500 ease-in-out">
                                        <img src="/Images/thor.png" className="max-w-[50px] max-h-[50px]"></img>
                                    </div>
                                    <div>
                                        <p className="font-bold text-3xl text-[#012F6D]">THORChain</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#012F6D] opacity-60 mt-6">THORChain is a decentralized liquidity protocol that allows users to easily exchange cryptocurrency assets without losing full custody of their assets.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p className="font-bold text-sm text-[#012F6D]">Invested At <br /> Price</p>
                                    </div>
                                    <div className="flex ml-6">
                                        <p className="text-[#012F6D] font-bold text-3xl">0.02</p>
                                        <p className="text-[#012F6D] font-bold text-base">$</p>
                                    </div>
                                </div>

                                <div className="flex mt-6">
                                    <p className="font-bold text-3xl lg:text-4xl text-[#F6161E]">1,063 X</p>
                                    <p className="font-bold text-2xl text-[#0040A1] ml-6"> return</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex mt-6 px-4 lg:px-0 resp-controls relative z-50 lg:-mt-6 lg:pr-10 text-white  justify-between w-full items-center">
                        <div className="hover:scale-125 transition-all duration-500 ease-in-out" onClick={() => { handlePrev() }}>
                            <svg width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-0.866325 12.6339C-1.45211 12.0481 -1.45211 11.0984 -0.866325 10.5126L8.67962 0.966638C9.2654 0.380852 10.2152 0.380852 10.8009 0.966639C11.3867 1.55243 11.3867 2.50217 10.8009 3.08796L2.31566 11.5732L10.8009 20.0585C11.3867 20.6443 11.3867 21.5941 10.8009 22.1798C10.2151 22.7656 9.2654 22.7656 8.67962 22.1798L-0.866325 12.6339ZM32.3574 13.0732L0.194336 13.0732L0.194336 10.0732L32.3574 10.0732L32.3574 13.0732Z" fill="white" />
                            </svg>
                        </div>
                        <div className="hover:scale-125 transition-all duration-500 ease-in-out" onClick={() => { handleNext() }}>
                            <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.8771 12.6339C34.4629 12.0481 34.4629 11.0984 33.8771 10.5126L24.3311 0.966638C23.7453 0.380852 22.7956 0.380852 22.2098 0.966639C21.624 1.55243 21.624 2.50217 22.2098 3.08796L30.6951 11.5732L22.2098 20.0585C21.624 20.6443 21.624 21.5941 22.2098 22.1798C22.7956 22.7656 23.7453 22.7656 24.3311 22.1798L33.8771 12.6339ZM0.65332 13.0732L32.8164 13.0732L32.8164 10.0732L0.65332 10.0732L0.65332 13.0732Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>



            </div>

            {/* third box */}
            <div ref={viewRef} id="plan" className="w-full  overflow-hidden relative flex flex-col justify-center ">
                <div className="absolute z-10 h-full w-full ">
                    <img src="/Images/thirdbg.png" className="w-full h-full"></img>
                </div>
                <div ref={plans} className="relative lg:px-48 lg:py-24 px-6 py-6 h-full w-full z-20">
                    <div className="flex w-full justify-center items-center">
                        <p className="text-[#012F6D] ewf-investment-head tiro-regular font-light text-3xl lg:text-7xl">EWF Investment <span className="tiro">Plans</span> </p>
                    </div>
                    <div className="lg:mt-20  test-scroll mt-10 lg:items-end w-full justify-center items-center lg:flex-row flex-col flex gap-6">
                        <div className="transform group hideLeftAnimation  hover:scale-90 transition-transform duration-500 flex flex-col justify-between h-full px-8 min-h-[481px] min-w-[350px] responsive-planCards-width py-8 bg-[#012F6D]">
                            <div className="w-full flex-col flex">
                                <p className="tiro-regular text-white text-4xl">Prudent</p>
                                <p className="tiro text-white text-4xl">Portfolio</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">High Stability</p>
                                    </div>

                                </div>
                                <div className="flex my-4 items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">Low Risk</p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">Low Returns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full items-end -mt-10 flex justify-between">
                                <p className="text-lg font-bold text-white">Starter Plan</p>
                                <div className="rotate-360 different-mouse">
                                    <img className="transform hover:scale-110 transition-transform duration-500" src="/Images/redbtn.png"></img>
                                </div>
                            </div>
                        </div>

                        <div className="transform group hideDelay  hover:scale-90 transition-transform duration-500">
                            <div className="bg-[#F6161E]  w-full flex justify-between py-3 px-4 items-center">
                                <p className="text-white font-bold text-2xl">Most Popular</p>
                                <div>
                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.5153 8.17952C18.9059 7.78899 18.9059 7.15583 18.5153 6.76531L12.1514 0.401344C11.7608 0.0108199 11.1277 0.0108199 10.7372 0.401344C10.3466 0.791869 10.3466 1.42503 10.7372 1.81556L16.394 7.47241L10.7372 13.1293C10.3466 13.5198 10.3466 14.153 10.7372 14.5435C11.1277 14.934 11.7608 14.934 12.1514 14.5435L18.5153 8.17952ZM0.808228 8.47241H17.8082V6.47241H0.808228V8.47241Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-between h-full px-8 min-h-[481px] min-w-[350px] responsive-planCards-width py-8 bg-[#0040A1]">
                                <div className="w-full flex-col flex">
                                    <p className="tiro-regular text-white text-4xl">Harmony</p>
                                    <p className="tiro text-white text-4xl">Heights</p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                                <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white">Diversified Portfolio</p>
                                        </div>

                                    </div>
                                    <div className="flex my-4 items-center gap-6">
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                                <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white">Moderate Risk</p>
                                        </div>

                                    </div>
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                                <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-lg font-bold text-white">Moderate Returns</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full items-center -mt-10 flex justify-between">
                                    <p className="text-lg font-bold text-white">Medium Plan</p>
                                    <div className="flex different-mouse responsive-btn-padding transform group-hover:scale-110 transition-transform duration-500 items-center lg:px-6 px-4 py-2 lg:py-3 text-white bg-[#F6161E]">
                                        <div className="flex responsive-btn-text font-bold text-base">
                                            Get Started
                                        </div>
                                        <div className="ml-3 responsive-btn-margin">
                                            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.501 6.82525C18.7939 6.53236 18.7939 6.05749 18.501 5.76459L13.7281 0.991621C13.4352 0.698728 12.9603 0.698728 12.6674 0.991621C12.3745 1.28451 12.3745 1.75939 12.6674 2.05228L16.91 6.29492L12.6674 10.5376C12.3745 10.8305 12.3745 11.3053 12.6674 11.5982C12.9603 11.8911 13.4352 11.8911 13.7281 11.5982L18.501 6.82525ZM0.970703 7.04492H17.9707V5.54492H0.970703V7.04492Z" fill="white" />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="transform group hideRightAnimation hover:scale-90 transition-transform duration-500 flex flex-col justify-between h-full px-8 min-h-[481px] min-w-[350px] responsive-planCards-width py-8 bg-[#012F6D]">
                            <div className="w-full flex-col flex">
                                <p className="tiro-regular text-white text-4xl">Quantum</p>
                                <p className="tiro text-white text-4xl">Quest</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">High Volatility</p>
                                    </div>

                                </div>
                                <div className="flex my-4 items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">High Risk</p>
                                    </div>

                                </div>
                                <div className="flex items-center gap-6">
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.6035" cy="11.9883" r="10.5176" stroke="white" stroke-width="2" />
                                            <path d="M6.71484 11.3386L10.7031 14.9529L21.7955 1.86621" stroke="white" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-white">High Returns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full items-end -mt-10 flex justify-between">
                                <p className="text-lg font-bold text-white">Advanced Plan</p>
                                <div className="rotate-360 different-mouse">
                                    <img className="transform hover:scale-110 transition-transform duration-500" src="/Images/redbtn.png"></img>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            {/* forth box */}
            <div className="bg-[#E8ECF2] responsive-body-padding overflow-hidden  w-full px-4 py-6 lg:px-28 lg:py-28">
                <div className="flex  lg:flex-row flex-col w-full gap-4">
                    <div className="hideLeftAnimation group move-up lg:w-1/3 lg:min-h-[547px] relative forth-first">
                        <div className="relative flex-col h-full flex py-10 px-8 justify-between z-20">
                            <div className="text-5xl responsive-forthCard-title text-white">
                                <p className="tiro-regular">Expert Data</p>
                                <p className="tiro">Analysis</p>
                            </div>

                            <div>
                                <p className="opacity-70 lg:text-xl text-base font-bold text-white">Leveraging big data and machine learning to uncover market patterns</p>
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse mt-8 items-center justify-between w-full">
                                    <p className="text-white transform group-hover:scale-125 transition-transform duration-500 text-lg font-semibold">Learn More</p>
                                    <div>
                                        <svg className="transform group-hover:scale-125 transition-transform duration-500" width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.4308 12.7735C34.0166 12.1878 34.0166 11.238 33.4308 10.6522L23.8848 1.10629C23.299 0.5205 22.3493 0.5205 21.7635 1.10629C21.1777 1.69207 21.1777 2.64182 21.7635 3.22761L30.2488 11.7129L21.7635 20.1982C21.1777 20.784 21.1777 21.7337 21.7635 22.3195C22.3493 22.9053 23.2991 22.9053 23.8848 22.3195L33.4308 12.7735ZM0.207031 13.2129L32.3701 13.2129L32.3701 10.2129L0.207031 10.2129L0.207031 13.2129Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="hideDelay group move-up lg:w-1/3 lg:min-h-[547px] relative bg-[#F6161E]">
                        <div className="relative flex-col h-full flex py-10 px-8 justify-between z-20">
                            <div className="text-5xl responsive-forthCard-title text-white">
                                <div className="flex items-center">
                                    <p className="tiro-regular">Expert</p>
                                    <span className="tiro ml-3">Risk</span>
                                </div>

                                <p className="tiro">Management</p>
                            </div>

                            <div>
                                <p className="opacity-70 lg:text-xl text-base font-bold text-white">Utilizing advanced modeling techniques and stringent controls to protect your capital</p>
                                <div onClick={() => scrollToSection(contact)} className="flex mt-8 different-mouse items-center justify-between w-full">
                                    <p className="text-white group-hover:scale-125 transition-transform duration-500 transform hover:scale-110 text-lg font-semibold">Learn More</p>
                                    <div>
                                        <svg className="group-hover:scale-125 transition-transform duration-500" width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.4308 12.7735C34.0166 12.1878 34.0166 11.238 33.4308 10.6522L23.8848 1.10629C23.299 0.5205 22.3493 0.5205 21.7635 1.10629C21.1777 1.69207 21.1777 2.64182 21.7635 3.22761L30.2488 11.7129L21.7635 20.1982C21.1777 20.784 21.1777 21.7337 21.7635 22.3195C22.3493 22.9053 23.2991 22.9053 23.8848 22.3195L33.4308 12.7735ZM0.207031 13.2129L32.3701 13.2129L32.3701 10.2129L0.207031 10.2129L0.207031 13.2129Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="hideRightAnimation  lg:w-1/3 flex flex-col gap-4 lg:min-h-[547px] ">
                        <div className="move-up group forth-last-top h-1/2 w-full flex-col  flex py-10 px-8 justify-between z-20">
                            <div className="text-4xl responsive-forthCard-title text-white">
                                <div className="flex items-center">
                                    <p className="tiro-regular">Algorithmic</p>
                                </div>

                                <p className="tiro">Trading</p>
                            </div>

                            <div>
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse mt-8 items-center justify-between w-full">
                                    <p className="text-white group-hover:scale-125 transition-transform duration-500 text-lg font-semibold">Learn More</p>
                                    <div className="group-hover:scale-125 transition-transform duration-500">
                                        <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.4308 12.7735C34.0166 12.1878 34.0166 11.238 33.4308 10.6522L23.8848 1.10629C23.299 0.5205 22.3493 0.5205 21.7635 1.10629C21.1777 1.69207 21.1777 2.64182 21.7635 3.22761L30.2488 11.7129L21.7635 20.1982C21.1777 20.784 21.1777 21.7337 21.7635 22.3195C22.3493 22.9053 23.2991 22.9053 23.8848 22.3195L33.4308 12.7735ZM0.207031 13.2129L32.3701 13.2129L32.3701 10.2129L0.207031 10.2129L0.207031 13.2129Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>



                        </div>

                        <div className="move-up group forth-last-bottom h-1/2 w-full flex-col  flex py-10 px-8 justify-between z-20">
                            <div className="text-4xl responsive-forthCard-title text-white">
                                <div className="flex items-center">
                                    <p className="tiro-regular">Trends</p>
                                </div>

                                <p className="tiro">Analysis</p>
                            </div>

                            <div>
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse  mt-8 items-center justify-between w-full">
                                    <p className="text-white text-lg group-hover:scale-125 transition-transform duration-500 font-semibold">Learn More</p>
                                    <div className="group-hover:scale-125 transition-transform duration-500">
                                        <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33.4308 12.7735C34.0166 12.1878 34.0166 11.238 33.4308 10.6522L23.8848 1.10629C23.299 0.5205 22.3493 0.5205 21.7635 1.10629C21.1777 1.69207 21.1777 2.64182 21.7635 3.22761L30.2488 11.7129L21.7635 20.1982C21.1777 20.784 21.1777 21.7337 21.7635 22.3195C22.3493 22.9053 23.2991 22.9053 23.8848 22.3195L33.4308 12.7735ZM0.207031 13.2129L32.3701 13.2129L32.3701 10.2129L0.207031 10.2129L0.207031 13.2129Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

                <div className="flex   lg:flex-row flex-col mt-4 w-full gap-4">
                    <div className="lg:w-1/2 flex flex-col justify-between hideLeftAnimation bg-white w-full px-8 py-8">
                        <div className="flex responsive-hide lg:flex-row flex-col  justify-between">
                            <div className="half">
                                <p className="tiro-regular text-2xl lg:text-4xl text-[#012F6D]" >Our <span className="tiro">Expertise</span></p>
                            </div>
                            <div className="lg:w-1/2 mt-4 lg:mt-0">
                                <p className="font-bold text-sm lg:text-sm text-[#012F6D] resposnive-exp-margin">Our analysts and traders brings together a wealth of knowledge and strategic acumen, dedicated to maximizing your investment returns</p>
                            </div>
                        </div>
                        <div className="flex responsive-show gap-6 flex-col  justify-between">
                            <div className="half">
                                <p className="tiro-regular text-2xl lg:text-4xl text-[#012F6D]" >Our <span className="tiro">Expertise</span></p>
                            </div>
                            <div className=" mt-4 lg:mt-0">
                                <p className="font-bold text-sm lg:text-sm text-[#012F6D] ">Our analysts and traders brings together a wealth of knowledge and strategic acumen, dedicated to maximizing your investment returns</p>
                            </div>
                        </div>

                        <div className="flex responsive-years-btn justify-between mt-10 lg:mt-0">
                            <div className="half  flex items-center lg:items-end">
                                <p className=" font-bold text-3xl lg:text-7xl text-[#F6161E]" >10</p>
                                <p className="font-bold text-[10px] lg:text-2xl text-[#F6161E] lg:whitespace-nowrap ml-2 lg:ml-3">Years Experience</p>
                            </div>
                            <div className="flex half items-end ">
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse items-center px-3 transform hover:scale-110 transition-transform duration-500 lg:px-6 py-3 gap-2 bg-[#012F6D]">
                                    <p className="lg:text-base text-sm font-medium text-white ">Learn more</p>
                                    <div className="flex items-center h-full mt-1">
                                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2812 6.26764C18.5741 5.97474 18.5741 5.49987 18.2812 5.20698L13.5082 0.434005C13.2153 0.141112 12.7404 0.141111 12.4475 0.434005C12.1546 0.726898 12.1546 1.20177 12.4475 1.49467L16.6902 5.73731L12.4475 9.97995C12.1546 10.2728 12.1546 10.7477 12.4475 11.0406C12.7404 11.3335 13.2153 11.3335 13.5082 11.0406L18.2812 6.26764ZM0.839844 6.4873L17.7508 6.48731L17.7508 4.98731L0.839844 4.9873L0.839844 6.4873Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="lg:w-1/2 hideRightAnimation bg-white w-full px-8 py-8">
                        <div className="flex responsive-show gap-6 flex-col justify-between">
                            <div>
                                <p className="tiro-regular text-2xl lg:text-4xl  text-[#012F6D]" >Market<span className="tiro ml-2">Research</span></p>
                            </div>
                            <div className=" mt-4 lg:mt-0">
                                <p className="font-bold text-sm lg:text-sm text-[#012F6D]">We delve into the intricacies of the cryptocurrency markets, employing a meticulous approach to uncover emerging trends, evaluate economic indicators, and assess the potential impact of global events on assets.</p>
                            </div>
                        </div>
                        <div className="flex responsive-hide lg:flex-row flex-col justify-between">
                            <div>
                                <p className="tiro-regular text-2xl lg:text-4xl  text-[#012F6D]" >Market<span className="tiro ml-2">Research</span></p>
                            </div>
                            <div className="lg:w-1/2 mt-4 lg:mt-0">
                                <p className="font-bold text-sm lg:text-sm text-[#012F6D] resposnive-exp-margin">We delve into the intricacies of the cryptocurrency markets, employing a meticulous approach to uncover emerging trends, evaluate economic indicators, and assess the potential impact of global events on assets.</p>
                            </div>
                        </div>

                        <div className="flex responsive-years-btn justify-between mt-10 lg:mt-28">
                            <div className=" flex items-center lg:items-end">
                                <p className=" font-bold text-3xl lg:text-7xl text-[#F6161E]" >14</p>
                                <p className="font-bold text-[10px] lg:text-2xl text-[#F6161E] whitespace-nowrap ml-3">Years Experience</p>
                            </div>
                            <div className="flex items-end ">
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse items-center px-3 lg:px-6 py-3 transform hover:scale-110 transition-transform duration-500 gap-2 bg-[#012F6D]">
                                    <p className="lg:text-base text-sm font-medium text-white ">Learn more</p>
                                    <div className="flex items-center h-full mt-1">
                                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2812 6.26764C18.5741 5.97474 18.5741 5.49987 18.2812 5.20698L13.5082 0.434005C13.2153 0.141112 12.7404 0.141111 12.4475 0.434005C12.1546 0.726898 12.1546 1.20177 12.4475 1.49467L16.6902 5.73731L12.4475 9.97995C12.1546 10.2728 12.1546 10.7477 12.4475 11.0406C12.7404 11.3335 13.2153 11.3335 13.5082 11.0406L18.2812 6.26764ZM0.839844 6.4873L17.7508 6.48731L17.7508 4.98731L0.839844 4.9873L0.839844 6.4873Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full mt-24 lg:flex hideTopAnimationnodelay bg-[#013276] lg:min-h-[290px]">
                    <div className="lg:w-1/2 group w-full case-study-left  flex justify-center items-center">
                        <p className="tiro mr-6 font-normal text-5xl lg:text-6xl text-white">Case Study</p>
                        <div className="lg:block hidden  group-hover:translate-x-4 transition-all duration-500 ease-in-out">
                            <svg width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.0607 13.0607C56.6464 12.4749 56.6464 11.5251 56.0607 10.9393L46.5147 1.3934C45.9289 0.807615 44.9792 0.807615 44.3934 1.3934C43.8076 1.97919 43.8076 2.92894 44.3934 3.51472L52.8787 12L44.3934 20.4853C43.8076 21.0711 43.8076 22.0208 44.3934 22.6066C44.9792 23.1924 45.9289 23.1924 46.5147 22.6066L56.0607 13.0607ZM-1.31134e-07 13.5L55 13.5L55 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full py-8 px-8 flex flex-col justify-between" >
                        <p className="font-normal text-5xl text-white tiro-regular ">Background</p>

                        <p className="font-bold leading-6 mt-10 opacity-80 lg:mt-0 text-white text-base">
                            Bitcoin's volatile nature often leads to significant price fluctuations, characterized by alternating periods of rapid growth (bull runs) and decline (bear markets). EWF Capital recognized the potential for substantial returns during bull runs and formulated strategic approaches to capitalize on these opportunities.
                        </p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col w-full gap-5 mt-5">
                    <div className="group w-full hideLeftAnimation  lg:w-1/3 px-10 py-10 min-h-[537px] flex flex-col justify-between analyzing ">
                        <div>
                            <p className="tiro-regular font-normal text-6xl responsive-analyzing-cardHead text-white">Analyzing </p>
                            <p className="tiro font-normal text-4xl text-white mt-2">Bitcoin Bull Run <br /> Cycles</p>
                        </div>
                        <div className="flex  w-full justify-between">
                            <p className="font-medium inter  lg:block hidden  text-base text-white">Analysis on right</p>
                            <p className="font-medium inter  lg:hidden block  text-base text-white">Analysis on bottom</p>
                            <div className="lg:block transition-all duration-500 ease-in-out group-hover:translate-x-4 hidden">
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2237 13.0607C33.8095 12.4749 33.8095 11.5251 33.2237 10.9393L23.6778 1.3934C23.092 0.807609 22.1423 0.80761 21.5565 1.3934C20.9707 1.97918 20.9707 2.92893 21.5565 3.51472L30.0418 12L21.5565 20.4853C20.9707 21.0711 20.9707 22.0208 21.5565 22.6066C22.1423 23.1924 23.092 23.1924 23.6778 22.6066L33.2237 13.0607ZM1.31134e-07 13.5L32.1631 13.5L32.1631 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="white" />
                                </svg>
                            </div>
                            <div className="lg:hidden transition-all duration-500 ease-in-out group-hover:translate-y-4 block rotate-90">
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2237 13.0607C33.8095 12.4749 33.8095 11.5251 33.2237 10.9393L23.6778 1.3934C23.092 0.807609 22.1423 0.80761 21.5565 1.3934C20.9707 1.97918 20.9707 2.92893 21.5565 3.51472L30.0418 12L21.5565 20.4853C20.9707 21.0711 20.9707 22.0208 21.5565 22.6066C22.1423 23.1924 23.092 23.1924 23.6778 22.6066L33.2237 13.0607ZM1.31134e-07 13.5L32.1631 13.5L32.1631 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className=" w-full slowly-visible lg:w-1/3 py-10 pl-10 pr-14 min-h-[537px] flex flex-col justify-between bg-white">
                        <div className="flex items-center w-full justify-between">
                            <p className="text-[#012F6D] tiro font-normal text-4xl">(2017-2019)</p>
                            <div className="h-full responsive-hide w-[1px] bg-[#F6161E]">

                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-base text-[#152246] opacity-80">During the 2017 bull run, EWF Capital strategically positioned itself to capitalize on Bitcoin's meteoric rise. By deploying dynamic trading strategies and actively engaging in project launches, the firm achieved a substantial gain of 3,420x.</p>

                            <p className="font-bold text-base text-[#152246] opacity-80 mt-8">This early success set a precedent for excellence in wealth generation.</p>
                        </div>
                    </div>


                    <div className=" w-full hideRightAnimation lg:w-1/3 py-10 pl-10 pr-14 min-h-[537px] flex flex-col justify-between bg-white">
                        <div className="flex items-center w-full justify-between">
                            <p className="text-[#012F6D] font-normal text-4xl tiro">(2020-2021)</p>
                            <div className="h-full w-[1px] responsive-hide bg-[#F6161E]">

                            </div>
                        </div>

                        <div>
                            <p className="font-bold text-base text-[#152246] opacity-80 mt-10">Re-entering the market in 2020, EWF Capital demonstrated renewed strategic vigor. Leveraging market timing excellence, the firm capitalized on phases of market dormancy to amass positions at favorable prices. Tactical trading during market downturns enabled EWF Capital to accumulate assets at discounted prices.</p>

                            <p className="font-bold text-base text-[#152246] opacity-80 mt-8">Active participation in project launches further contributed to the impressive average Return on Investment (ROI) of 750x within less than a year.</p>
                        </div>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col w-full  mt-5">
                    <div className="group w-full lg:w-1/3 px-10 py-10 min-h-[517px] flex flex-col justify-between strategies hideLeftAnimation">
                        <div>
                            <p className="tiro font-normal text-6xl responsive-analyzing-cardHead text-white">Strategies </p>
                            <p className="tiro font-normal text-4xl text-white mt-2">Employed</p>
                        </div>
                        <div className="flex  w-full justify-between">
                            <p className="font-medium inter  lg:block hidden text-base text-white">Strategies on right</p>
                            <p className="font-medium inter  lg:hidden block text-base text-white">Strategies on bottom</p>
                            <div className="lg:block transition-all duration-500 ease-in-out group-hover:translate-x-4 hidden">
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2237 13.0607C33.8095 12.4749 33.8095 11.5251 33.2237 10.9393L23.6778 1.3934C23.092 0.807609 22.1423 0.80761 21.5565 1.3934C20.9707 1.97918 20.9707 2.92893 21.5565 3.51472L30.0418 12L21.5565 20.4853C20.9707 21.0711 20.9707 22.0208 21.5565 22.6066C22.1423 23.1924 23.092 23.1924 23.6778 22.6066L33.2237 13.0607ZM1.31134e-07 13.5L32.1631 13.5L32.1631 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="white" />
                                </svg>
                            </div>
                            <div className="lg:hidden transition-all duration-500 ease-in-out group-hover:translate-y-4 block rotate-90">
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M33.2237 13.0607C33.8095 12.4749 33.8095 11.5251 33.2237 10.9393L23.6778 1.3934C23.092 0.807609 22.1423 0.80761 21.5565 1.3934C20.9707 1.97918 20.9707 2.92893 21.5565 3.51472L30.0418 12L21.5565 20.4853C20.9707 21.0711 20.9707 22.0208 21.5565 22.6066C22.1423 23.1924 23.092 23.1924 23.6778 22.6066L33.2237 13.0607ZM1.31134e-07 13.5L32.1631 13.5L32.1631 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className="flex hideRightAnimation lg:flex-row flex-col w-full lg:ml-5 gap-4 lg:w-2/3 bg-white">
                        <div className="px-10 w-full font-normal text-3xl text-[#012F6D] flex flex-col justify-between py-10">
                            <div className="w-full lg:flex-row flex-col flex items-start justify-between">
                                <div>
                                    <p className="tiro-regular" >Market Timing Excellence</p>
                                </div>

                                <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10  responsive-strategies-top">
                                    <p className="font-bold text-base opacity-80 text-[#152246]">EWF capitalized on low valuations during short bearish trends. Identifying opportune entry points enabled the firm to amass positions at favorable prices.</p>
                                </div>
                            </div>

                            <div className="w-full my-10 responsive-strategies-marging lg:my-0 flex lg:flex-row flex-col  items-start justify-between">
                                <div>
                                    <p className="tiro-regular">Tactical Trading During <br />Downturns</p>
                                </div>

                                <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10 responsive-strategies-mid">
                                    <p className="font-bold text-base opacity-80 text-[#152246]">Tactical trading maneuvers during significant market downturns enabled the firm to accumulate assets at deeply discounted prices, turning adversity into advantage.</p>
                                </div>
                            </div>

                            <div className="w-full flex lg:flex-row flex-col  items-start justify-between">
                                <div>
                                    <p className="mb-10 tiro-regular">Active Participation in <br /> Project Launches</p>
                                </div>

                                <div className="lg:w-1/2 mt-6 lg:mt-0 lg:pl-10 responsive-strategies-bot">
                                    <p className="font-bold text-base opacity-80 text-[#152246]">EWF Capital actively engaged in project launches, identifying promising projects early in their development. This proactive involvement allowed the firm to ride the upward trajectory of these projects, contributing significantly to overall ROI.</p>
                                </div>
                            </div>



                        </div>
                    </div>

                    {/* <div className="flex w-full gap-4  lg:w-1/3 bg-white">
                        <div className="px-10 w-full border border-black font-bold text-base text-[#012F6D] flex flex-col justify-between py-10">
                            <p>EWF capitalized on low valuations during short bearish trends. Identifying opportune entry points enabled the firm to amass positions at favorable prices.</p>

                            <p>Tactical Trading During <br/>Downturns:</p>

                            <p>Active Participation in <br/> Project Launches:</p>

                        </div>
                    </div> */}

                </div>

                <div className="lg:mt-28 resp-direction   mt-10 lg:flex-row flex-col flex w-full">
                    <div className="lg:w-1/2 hideLeftAnimation relative overflow-hidden bg-white w-full">
                        <div className="py-14  h-full flex flex-col justify-between  resp-large px-10">
                            <div>
                                <div className="flex w-full">
                                    <p className="tiro-regular text-[#0040A1] text-6xl">Who are <span className="tiro"> we?</span> </p>
                                </div>

                                <div className="flex font-bold opacity-70 mt-8 flex-col gap-6 text-[#152246] responsive-who-we-text text-base">
                                    <p>EWF Capital is a collective of visionary strategists, seasoned analysts, and cryptocurrency aficionados dedicated to the art and science of investing. Established on the bedrock of comprehensive market research, advanced risk management, and algorithmic precision, we pride ourselves on our ability to identify and capitalize on opportunities within the ever-evolving crypto space.</p>
                                    <p>Our commitment extends beyond achieving financial success; we aim to empower our clients with the knowledge and tools necessary for informed investment decisions in the digital era.</p>
                                    <p>Join us as we navigate the complexities of cryptocurrency markets, offering not just investment solutions, but a partnership for future prosperity.</p>
                                </div>
                            </div>


                            <div className="flex w-full relative z-50 mt-24 lg:mt-10 gap-6">
                                <div onClick={() => scrollToSection(book)} className="flex different-mouse items-center px-3 transform hover:scale-110 transition-transform duration-500 lg:px-6 py-3 gap-2 responsive-btn-padding bg-[#012F6D]">
                                    <p className="lg:text-base text-sm responsive-btn-text font-medium text-white ">Book an appointment</p>
                                    <div className="flex items-center h-full ">
                                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2812 6.26764C18.5741 5.97474 18.5741 5.49987 18.2812 5.20698L13.5082 0.434005C13.2153 0.141112 12.7404 0.141111 12.4475 0.434005C12.1546 0.726898 12.1546 1.20177 12.4475 1.49467L16.6902 5.73731L12.4475 9.97995C12.1546 10.2728 12.1546 10.7477 12.4475 11.0406C12.7404 11.3335 13.2153 11.3335 13.5082 11.0406L18.2812 6.26764ZM0.839844 6.4873L17.7508 6.48731L17.7508 4.98731L0.839844 4.9873L0.839844 6.4873Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                                <div onClick={() => scrollToSection(contact)} className="flex different-mouse responsive-btn-padding items-center px-3 transform hover:scale-110 transition-transform duration-500 lg:px-6 py-3 gap-2 bg-[#0040A1]">
                                    <p className="lg:text-base text-sm font-medium text-white responsive-btn-text">Contact Us</p>
                                    <div className="flex items-center h-full ">
                                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.2812 6.26764C18.5741 5.97474 18.5741 5.49987 18.2812 5.20698L13.5082 0.434005C13.2153 0.141112 12.7404 0.141111 12.4475 0.434005C12.1546 0.726898 12.1546 1.20177 12.4475 1.49467L16.6902 5.73731L12.4475 9.97995C12.1546 10.2728 12.1546 10.7477 12.4475 11.0406C12.7404 11.3335 13.2153 11.3335 13.5082 11.0406L18.2812 6.26764ZM0.839844 6.4873L17.7508 6.48731L17.7508 4.98731L0.839844 4.9873L0.839844 6.4873Z" fill="white" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="absolute w-full overflow-hidden bottom-0">
                            <img src="/Images/sixthbg.png" className=" h-full w-full"></img>
                        </div>

                    </div>



                    <div className="lg:w-1/2 hideRightAnimation relative w-full">
                        <div className="absolute z-50 bottom-28 left-10">
                            <svg width="96" height="37" viewBox="0 0 96 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7662 7.70788C26.0625 5.66733 25.3061 4.27757 24.4969 3.53869C23.7228 2.76466 22.4359 2.16655 20.9609 2.16655V1.11108C21.1368 1.11108 21.4008 1.09346 21.7526 1.05832C22.0693 1.02308 22.4035 1.00555 22.7553 1.00555C24.6904 1.00555 26.432 1.44529 27.98 2.32484C29.5632 3.20449 30.8298 4.99883 31.7798 7.70788L38.2971 27.6643L43.9439 10.9347L42.6773 7.29315C41.9737 5.2526 41.2173 3.86284 40.408 3.12396C39.634 2.34993 38.4554 1.89258 36.8722 1.75182V0.696347C37.0481 0.696347 37.2944 0.678731 37.6109 0.643586C37.9628 0.608348 38.3146 0.59082 38.6665 0.59082C40.6015 0.59082 42.3431 1.03055 43.8912 1.9102C45.4745 2.78975 46.741 4.5841 47.691 7.29315L54.7628 27.6643L53.9711 36.4777H52.9157L45.105 14.2595L37.5054 36.4777H36.45L26.7662 7.70788Z" fill="white" />
                                <path d="M56.7253 7.70819C56.0214 5.66755 55.265 4.27788 54.4559 3.539C53.6818 2.76497 52.3949 2.16686 50.9199 2.16686V1.11139C51.0959 1.11139 51.3597 1.09377 51.7116 1.05862C52.0282 1.02339 52.3624 1.00586 52.7143 1.00586C54.6494 1.00586 56.3913 1.44559 57.9392 2.32515C59.5221 3.20479 60.7886 4.99914 61.7388 7.70819L68.2559 27.6645C68.2559 30.6918 67.7098 34.2108 67.4644 36.478H66.4091L56.7253 7.70819Z" fill="white" />
                                <path d="M5.68337 7.45114C5.68337 5.65679 5.43708 4.33742 4.94449 3.49301C4.4519 2.61345 3.46682 2.17363 1.98906 2.17363H0.933594V1.11816H24.1545C27.1451 1.11816 28.6404 2.52554 28.6404 5.34012V9.29825H27.5849C27.5849 5.25221 25.386 3.22919 20.988 3.22919H10.4331V16.9506H24.6823V19.0616H10.4331V33.8385H19.6686C22.0963 33.8385 23.9962 33.3988 25.3683 32.5192C26.7405 31.6396 29.0771 27.983 29.8863 25.872L30.3713 27.1596L27.8488 33.3108C27.2154 35.07 25.8961 35.9496 23.8907 35.9496H5.68337V7.45114Z" fill="white" />
                                <path d="M72.1716 7.97849C72.1716 6.18414 71.9253 4.86476 71.4327 4.02044C70.9401 3.1408 69.9549 2.70107 68.4772 2.70107H67.4219V1.64551H90.6427C93.6333 1.64551 95.1285 3.05289 95.1285 5.86756V9.8256H94.0733C94.0733 5.77956 91.8741 3.75653 87.4759 3.75653H76.9213V17.478H91.1703V19.589H76.9213V36.4769C75.3383 36.4769 72.1716 36.4769 72.1716 36.4769V7.97849Z" fill="white" />
                                <path d="M72.1716 30.1869C72.1716 31.9812 71.9253 33.3005 71.4327 34.1449C70.9401 35.0246 69.9549 35.4643 68.4772 35.4643H67.4219V36.5199C78.5651 36.9615 76.5744 35.4643 76.9213 34.4088V20.6874V18.5764V1.68848C75.3383 1.68848 72.1716 1.68848 72.1716 1.68848V30.1869Z" fill="white" />
                                <path d="M55.7956 15.375L52.9863 36.4462H54.67L57.4201 19.8162L55.7956 15.375Z" fill="white" />
                            </svg>
                        </div>
                        <div className="overflow-hidden h-full relative">
                            <img src="/Images/croppedsixthsecbg.png" className="h-full w-full hover:scale-110 transition-all duration-500 ease-in-out"></img>
                        </div>
                    </div>
                    {/* <div className="lg:w-1/2 hideRightAnimation relative w-full">
                        <div className="absolute z-50 bottom-28 left-10">
                            <svg width="96" height="37" viewBox="0 0 96 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.7662 7.70788C26.0625 5.66733 25.3061 4.27757 24.4969 3.53869C23.7228 2.76466 22.4359 2.16655 20.9609 2.16655V1.11108C21.1368 1.11108 21.4008 1.09346 21.7526 1.05832C22.0693 1.02308 22.4035 1.00555 22.7553 1.00555C24.6904 1.00555 26.432 1.44529 27.98 2.32484C29.5632 3.20449 30.8298 4.99883 31.7798 7.70788L38.2971 27.6643L43.9439 10.9347L42.6773 7.29315C41.9737 5.2526 41.2173 3.86284 40.408 3.12396C39.634 2.34993 38.4554 1.89258 36.8722 1.75182V0.696347C37.0481 0.696347 37.2944 0.678731 37.6109 0.643586C37.9628 0.608348 38.3146 0.59082 38.6665 0.59082C40.6015 0.59082 42.3431 1.03055 43.8912 1.9102C45.4745 2.78975 46.741 4.5841 47.691 7.29315L54.7628 27.6643L53.9711 36.4777H52.9157L45.105 14.2595L37.5054 36.4777H36.45L26.7662 7.70788Z" fill="white" />
                                <path d="M56.7253 7.70819C56.0214 5.66755 55.265 4.27788 54.4559 3.539C53.6818 2.76497 52.3949 2.16686 50.9199 2.16686V1.11139C51.0959 1.11139 51.3597 1.09377 51.7116 1.05862C52.0282 1.02339 52.3624 1.00586 52.7143 1.00586C54.6494 1.00586 56.3913 1.44559 57.9392 2.32515C59.5221 3.20479 60.7886 4.99914 61.7388 7.70819L68.2559 27.6645C68.2559 30.6918 67.7098 34.2108 67.4644 36.478H66.4091L56.7253 7.70819Z" fill="white" />
                                <path d="M5.68337 7.45114C5.68337 5.65679 5.43708 4.33742 4.94449 3.49301C4.4519 2.61345 3.46682 2.17363 1.98906 2.17363H0.933594V1.11816H24.1545C27.1451 1.11816 28.6404 2.52554 28.6404 5.34012V9.29825H27.5849C27.5849 5.25221 25.386 3.22919 20.988 3.22919H10.4331V16.9506H24.6823V19.0616H10.4331V33.8385H19.6686C22.0963 33.8385 23.9962 33.3988 25.3683 32.5192C26.7405 31.6396 29.0771 27.983 29.8863 25.872L30.3713 27.1596L27.8488 33.3108C27.2154 35.07 25.8961 35.9496 23.8907 35.9496H5.68337V7.45114Z" fill="white" />
                                <path d="M72.1716 7.97849C72.1716 6.18414 71.9253 4.86476 71.4327 4.02044C70.9401 3.1408 69.9549 2.70107 68.4772 2.70107H67.4219V1.64551H90.6427C93.6333 1.64551 95.1285 3.05289 95.1285 5.86756V9.8256H94.0733C94.0733 5.77956 91.8741 3.75653 87.4759 3.75653H76.9213V17.478H91.1703V19.589H76.9213V36.4769C75.3383 36.4769 72.1716 36.4769 72.1716 36.4769V7.97849Z" fill="white" />
                                <path d="M72.1716 30.1869C72.1716 31.9812 71.9253 33.3005 71.4327 34.1449C70.9401 35.0246 69.9549 35.4643 68.4772 35.4643H67.4219V36.5199C78.5651 36.9615 76.5744 35.4643 76.9213 34.4088V20.6874V18.5764V1.68848C75.3383 1.68848 72.1716 1.68848 72.1716 1.68848V30.1869Z" fill="white" />
                                <path d="M55.7956 15.375L52.9863 36.4462H54.67L57.4201 19.8162L55.7956 15.375Z" fill="white" />
                            </svg>
                        </div>
                        <div className="image-container relative w-full">
                            <img src="/Images/croppedsixthsecbg.png" className="image absolute h-full w-full scale-on-hover"></img>
                        </div>
                    </div> */}

                </div>
            </div>

            {/* fifth box */}
            <div ref={viewRef} className="flex  lg:flex-row flex-col">
                <div id="book" ref={book} className="lg:w-1/2 lg:py-24 w-full lg:-mt-8 px-10 py-10 lg:px-28 bg-[#012F6D]">
                    <div className="w-full text-white text-5xl lg:text-6xl">
                        <p className="tiro-regular">Book an</p>
                        <p className="tiro">appointment</p>
                    </div>
                    <div className="form hideDelay mt-16">
                        <div className="w-full flex gap-10">
                            <input placeholder="First Name" className="white  w-1/2 px-4 py-4 text-white font-bold text-base bg-[#012F6D] border-b hover:border-b-[rgba(255,255,255,0.5)] transition-all duration-700 border-b-white"></input>
                            <input placeholder="Second Name" className="white w-1/2 px-4 py-4 text-white font-bold text-base bg-[#012F6D] border-b border-b-white hover:border-b-[rgba(255,255,255,0.5)]"></input>
                        </div>
                        <div className="w-full group  group mt-1 flex">
                            <input placeholder="Email" className="white hover:border-b-[rgba(255,255,255,0.5)] transition-all duration-700 px-4 w-full py-4 text-white font-bold text-base bg-[#012F6D] border-b border-b-white"></input>
                            {/* <div className="flex  items-center justify-between w-[20%] border-b transition-all duration-700 group-hover:border-b-[rgba(255,255,255,0.5)] border-t-0  border-white">
                                <p className="font-bold text-base group-hover:text-[rgba(255,255,255,0.5)] transition-all duration-700 text-white">Verify</p>
                                <div className="rotate-360">
                                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8788 6.35064C18.1717 6.05775 18.1717 5.58288 17.8788 5.28998L13.1058 0.517013C12.813 0.224119 12.3381 0.224119 12.0452 0.517013C11.7523 0.809906 11.7523 1.28478 12.0452 1.57767L16.2878 5.82031L12.0452 10.063C11.7523 10.3558 11.7523 10.8307 12.0452 11.1236C12.3381 11.4165 12.813 11.4165 13.1058 11.1236L17.8788 6.35064ZM0.4375 6.57031L17.3485 6.57031L17.3485 5.07031L0.4375 5.07031L0.4375 6.57031Z" fill="white" />
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className="w-full mt-1 group flex">
                            <input placeholder="Mobile (Optional)" className="px-4 w-full hover:border-b-[rgba(255,255,255,0.5)] transition-all duration-700 white py-4 text-white font-bold text-base bg-[#012F6D] border-b border-white"></input>
                            {/* <div className="flex items-center justify-between w-[20%] border-b border-white transition-all group-hover:border-b-[rgba(255,255,255,0.5)] duration-700">
                                <p className="font-bold text-base text-white  group-hover:text-[rgba(255,255,255,0.5)] transition-all duration-700">Verify</p>
                                <div className="rotate-360">
                                    <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8788 6.35064C18.1717 6.05775 18.1717 5.58288 17.8788 5.28998L13.1058 0.517013C12.813 0.224119 12.3381 0.224119 12.0452 0.517013C11.7523 0.809906 11.7523 1.28478 12.0452 1.57767L16.2878 5.82031L12.0452 10.063C11.7523 10.3558 11.7523 10.8307 12.0452 11.1236C12.3381 11.4165 12.813 11.4165 13.1058 11.1236L17.8788 6.35064ZM0.4375 6.57031L17.3485 6.57031L17.3485 5.07031L0.4375 5.07031L0.4375 6.57031Z" fill="white" />
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                        <div className="mt-16 group  flex items-center transform  gap-6 px-6 ">
                            <p className="text-white different-mouse font-bold text-base transition-all duration-700 group-hover:text-[rgba(255,255,255,0.5)]">Book Appoinment</p>
                            <div className="rotate-360 different-mouse">
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.4472 6.4151C17.7401 6.1222 17.7401 5.64733 17.4472 5.35444L12.6742 0.581466C12.3813 0.288572 11.9064 0.288572 11.6135 0.581466C11.3207 0.874359 11.3207 1.34923 11.6135 1.64213L15.8562 5.88477L11.6135 10.1274C11.3207 10.4203 11.3207 10.8952 11.6135 11.1881C11.9064 11.481 12.3813 11.481 12.6742 11.1881L17.4472 6.4151ZM0.00585931 6.63477L16.9168 6.63477L16.9168 5.13477L0.00585944 5.13477L0.00585931 6.63477Z" fill="white" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>

                <div ref={contact} id="section1" className="lg:w-1/2 lg:py-24 w-full   px-10 py-10 lg:px-28 bg-white">
                    <div className="w-full flex gap-2 text-[#0040A1] text-6xl">
                        <p className="tiro-regular">Contact</p>
                        <p className="tiro">us</p>
                    </div>
                    <div className="form hideDelay mt-16">
                        <div className="w-full flex gap-10">
                            <input placeholder="First Name" className="w-1/2 black px-4 py-4 text-[#000000] font-bold text-base bg-white border-b border-b-[#000000] hover:border-b-[rgba(112,112,112,0.5)] transition-all duration-700"></input>
                            <input placeholder="Second Name" className="w-1/2 black px-4 py-4 text-[#000000] font-bold text-base bg-white border-b border-b-[#000000] hover:border-b-[rgba(112,112,112,0.5)] transition-all duration-700"></input>
                        </div>
                        <div className="w-full gap-10 mt-1 flex">
                            <input placeholder="Phone (Optional)" className="w-1/2 black px-4 py-4 text-[#000000] hover:border-b-[rgba(112,112,112,0.5)] transition-all duration-700 font-bold text-base bg-white border-b border-b-[#000000]"></input>
                            <input placeholder="Email" className="w-1/2 black px-4 py-4 text-[#000000] font-bold text-base hover:border-b-[rgba(112,112,112,0.5)] transition-all duration-700 bg-white border-b border-b-[#000000]"></input>
                        </div>
                        <div className="w-full flex mt-6 ">
                            <textarea type="textArea" placeholder="Message" className="px-4 hover:border-b-[rgba(112,112,112,0.5)] transition-all duration-700 pb-12 w-[100%] py-4 text-black font-bold text-base bg-white black border-b border-black"></textarea>

                        </div>
                        <div className="flex different-mouse mt-4 w-[50%] responsive-btn-padding responsive-submit-btn transform hover:scale-110 transition-transform duration-500 lg:w-1/3 items-center justify-between px-3 lg:px-6 py-3 gap-2 bg-[#0040A1]">
                            <p className="lg:text-base responsive-btn-text text-sm font-bold  text-white ">Submit</p>
                            <div className="flex items-center h-full ">
                                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2812 6.26764C18.5741 5.97474 18.5741 5.49987 18.2812 5.20698L13.5082 0.434005C13.2153 0.141112 12.7404 0.141111 12.4475 0.434005C12.1546 0.726898 12.1546 1.20177 12.4475 1.49467L16.6902 5.73731L12.4475 9.97995C12.1546 10.2728 12.1546 10.7477 12.4475 11.0406C12.7404 11.3335 13.2153 11.3335 13.5082 11.0406L18.2812 6.26764ZM0.839844 6.4873L17.7508 6.48731L17.7508 4.98731L0.839844 4.9873L0.839844 6.4873Z" fill="white" />
                                </svg>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            {/* sixth box */}

            <div className="flex lg:flex-row overflow-hidden flex-col w-full  lg:items-center justify-between bg-[#0040A1] py-10 px-10 lg:py-20 lg:px-28">
                <div className="hideLeftAnimation">
                    <p className="tiro text-white text-3xl lg:text-6xl">Join Today,</p>
                    <p className="tiro-regular text-white text-3xl lg:text-6xl  lg:ml-0 lg:mt-2">Conquer this bull run with us</p>
                </div>

                <div className="flex different-mouse slowly-visible newhalf transform hover:scale-110 transition-transform duration-500 justify-between mt-6 lg:mt-0 items-center px-3 responsive-btn-padding lg:px-6 lg:py-4 py-3 gap-10 bg-white">
                    <div>
                        <p className="lg:text-base text-sm font-bold text-[#0040A1] responsive-btn-text">Join now</p>
                    </div>

                    <div className="flex items-center h-full ">
                        <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2508 6.68536C23.5437 6.39247 23.5437 5.91759 23.2508 5.6247L18.4778 0.85173C18.1849 0.558837 17.71 0.558837 17.4171 0.85173C17.1242 1.14462 17.1242 1.6195 17.4171 1.91239L21.6598 6.15503L17.4171 10.3977C17.1242 10.6906 17.1242 11.1654 17.4171 11.4583C17.71 11.7512 18.1849 11.7512 18.4778 11.4583L23.2508 6.68536ZM0.345886 6.90503L22.7204 6.90503L22.7204 5.40503L0.345886 5.40503L0.345886 6.90503Z" fill="#012F6D" />
                        </svg>
                    </div>
                </div>

            </div>


            {/* footer */}

            <div className="flex flex-col lg:flex-row justify-between lg:px-28 px-10 py-6 lg:py-10 bg-white w-full">
                <div>
                    <svg width="81" height="31" viewBox="0 0 81 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2684 6.25997C21.6717 4.5297 21.0303 3.35126 20.3441 2.72473C19.6878 2.0684 18.5965 1.56123 17.3458 1.56123V0.66625C17.495 0.66625 17.7188 0.651312 18.0171 0.621511C18.2856 0.591631 18.569 0.576768 18.8673 0.576768C20.5082 0.576768 21.985 0.949638 23.2976 1.69545C24.6401 2.44134 25.7141 3.96285 26.5196 6.25997L32.0459 23.1819L36.8341 8.99614L35.7601 5.9083C35.1635 4.17803 34.5221 2.99959 33.8359 2.37306C33.1795 1.71673 32.1801 1.32892 30.8377 1.20956V0.314579C30.9868 0.314579 31.1957 0.299641 31.4641 0.26984C31.7624 0.23996 32.0608 0.225098 32.3592 0.225098C34 0.225098 35.4767 0.597967 36.7894 1.34386C38.1319 2.08967 39.2059 3.61118 40.0115 5.9083L46.0079 23.1819L45.3366 30.6552H44.4417L37.8187 11.8154L31.3746 30.6552H30.4797L22.2684 6.25997Z" fill="#012F6D" />
                        <path d="M47.6736 6.25962C47.0768 4.52927 46.4354 3.35091 45.7493 2.72438C45.093 2.06804 44.0018 1.56088 42.751 1.56088V0.665897C42.9003 0.665897 43.124 0.650959 43.4223 0.621158C43.6908 0.591279 43.9742 0.576416 44.2725 0.576416C45.9134 0.576416 47.3905 0.949286 48.703 1.6951C50.0452 2.44099 51.1192 3.9625 51.9248 6.25962L57.451 23.1815C57.451 25.7485 56.9879 28.7324 56.7798 30.6548H55.885L47.6736 6.25962Z" fill="#012F6D" />
                        <path d="M4.39181 6.04165C4.39181 4.52014 4.18296 3.40138 3.76528 2.68537C3.34759 1.93955 2.5123 1.56661 1.25923 1.56661H0.364258V0.671631H20.0543C22.5901 0.671631 23.8581 1.86501 23.8581 4.25162V7.60789H22.9631C22.9631 4.17707 21.0985 2.46166 17.3693 2.46166H8.41928V14.0967H20.5019V15.8867H8.41928V28.4167H16.2505C18.3091 28.4167 19.9201 28.0438 21.0836 27.298C22.2471 26.5521 24.2284 23.4515 24.9146 21.6615L25.3258 22.7534L23.1869 27.9692C22.6498 29.4609 21.5311 30.2067 19.8306 30.2067H4.39181V6.04165Z" fill="#012F6D" />
                        <path d="M60.7689 6.49013C60.7689 4.96863 60.5601 3.84987 60.1424 3.13393C59.7247 2.38804 58.8893 2.01517 57.6363 2.01517H56.7415V1.12012H76.4314C78.9673 1.12012 80.2352 2.3135 80.2352 4.70018V8.05638H79.3404C79.3404 4.62556 77.4756 2.91015 73.7462 2.91015H64.7964V14.5452H76.8788V16.3352H64.7964V30.6552C63.4542 30.6552 60.7689 30.6552 60.7689 30.6552V6.49013Z" fill="#012F6D" />
                        <path d="M60.7689 25.3216C60.7689 26.8431 60.5601 27.9618 60.1424 28.6778C59.7247 29.4237 58.8893 29.7965 57.6363 29.7965H56.7415V30.6916C66.1903 31.0661 64.5023 29.7965 64.7964 28.9016V17.2665V15.4765V1.15649C63.4542 1.15649 60.7689 1.15649 60.7689 1.15649V25.3216Z" fill="#012F6D" />
                        <path d="M46.8832 12.7607L44.501 30.628H45.9287L48.2606 16.5267L46.8832 12.7607Z" fill="#012F6D" />
                    </svg>
                </div>
                <div className="my-6 lg:my-0">
                    <p className="text-black font-bold text-base">All rights are reserved ewfcapital @2024</p>
                </div>
                <div className="flex gap-8">
                    <div className="transform hover:scale-125 different-mouse transition-transform duration-500">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9511 18.4517C18.9511 18.4517 22.5303 3.99922 22.6638 2.06568L22.6659 2.06359C22.6659 1.8425 22.6867 1.70901 22.6867 1.59637C22.6867 1.39614 22.6638 1.21884 22.6429 1.12916C22.5532 0.90806 22.4635 0.841315 22.3092 0.774569C21.9755 0.664022 21.4186 0.841315 21.4186 0.841315C21.4186 0.841315 1.69523 7.93512 0.560551 8.73607C0.316513 8.89042 0.249767 9.00305 0.205965 9.1136C0.00572795 9.66842 0.606438 9.91246 0.606438 9.91246L5.69788 11.5811C5.69788 11.5811 5.89811 11.602 5.96486 11.5602C7.12039 10.826 17.5953 4.19945 18.196 3.99922C18.3065 3.95541 18.3712 3.99922 18.3503 4.04302C18.1063 4.91071 9.01221 13.0036 9.01221 13.0036C9.01221 13.0036 8.96633 13.0266 8.94338 13.0933L8.92252 13.1392V13.183L8.45531 18.2744C8.45531 18.5852 8.54499 19.1859 9.4106 18.4747C9.5516 18.3637 9.68602 18.2446 9.81316 18.118L9.83402 18.0971C10.0875 17.8462 10.3469 17.6014 10.612 17.3629C11.2565 16.7414 11.8572 16.2283 12.2577 15.8737C12.337 15.8126 12.4117 15.7457 12.4809 15.6734C14.2371 16.8957 16.1039 18.2306 16.9278 18.9189C17.0604 19.0539 17.2199 19.1593 17.3961 19.2283C17.5722 19.2974 17.7609 19.3284 17.9499 19.3194C18.7279 19.2986 18.9511 18.4517 18.9511 18.4517Z" fill="#012F6D" />
                        </svg>
                    </div>
                    <div className="transform hover:scale-125 different-mouse transition-transform duration-500">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.12277 19.3434C15.3992 19.3434 19.93 12.2066 19.93 6.02165C19.93 5.82361 19.93 5.62557 19.9178 5.41516C20.8032 4.75025 21.5644 3.92992 22.1655 2.9929C21.3573 3.36422 20.4882 3.61177 19.5728 3.73554C20.5199 3.13828 21.2248 2.2161 21.5596 1.13629C20.6906 1.68089 19.7276 2.06459 18.6928 2.27501C18.2812 1.80427 17.7761 1.42742 17.2107 1.16927C16.6454 0.911128 16.0325 0.777552 15.4126 0.777344C12.9248 0.777344 10.9026 2.88026 10.9026 5.46466C10.9026 5.83599 10.9502 6.18255 11.0221 6.52912C7.28733 6.34346 3.96943 4.46333 1.74612 1.63138C1.34573 2.3519 1.13656 3.16569 1.1391 3.99299C1.1391 5.61443 1.93627 7.04897 3.13813 7.8894C2.42374 7.86481 1.72579 7.66523 1.10375 7.30766V7.36955C1.10375 9.63461 2.66153 11.5383 4.70688 11.9591C4.32657 12.0705 3.93408 12.12 3.51721 12.12C3.23199 12.12 2.94676 12.0952 2.67372 12.0333C3.24417 13.9011 4.90922 15.249 6.88265 15.2861C5.30093 16.5849 3.32802 17.2927 1.2939 17.2913C0.936761 17.2913 0.568648 17.2789 0.223694 17.2294C2.26762 18.6098 4.66804 19.3454 7.12277 19.3434Z" fill="#012F6D" />
                        </svg>
                    </div>
                    <div className="transform hover:scale-125 different-mouse transition-transform duration-500">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.2017 2.31803C18.6975 1.59269 17.1099 1.07526 15.4788 0.778696C15.4638 0.77569 15.4484 0.777725 15.4346 0.784507C15.4209 0.791289 15.4095 0.802471 15.4022 0.816449C15.1991 1.19763 14.9728 1.69329 14.815 2.08421C13.0562 1.80385 11.2671 1.80385 9.50833 2.08421C9.33144 1.65083 9.13193 1.22801 8.91071 0.817666C8.9032 0.804158 8.89199 0.793333 8.87854 0.7866C8.86508 0.779867 8.85001 0.777537 8.83528 0.779914C7.20407 1.0755 5.61642 1.59255 4.11232 2.31803C4.09892 2.32349 4.08753 2.3333 4.07983 2.34604C1.07083 7.0627 0.246922 11.6649 0.651913 16.2086C0.65304 16.2198 0.656291 16.2306 0.661474 16.2404C0.666656 16.2503 0.673664 16.2589 0.682084 16.2658C2.43389 17.6279 4.39352 18.6678 6.47728 19.3409C6.49192 19.3455 6.50759 19.3454 6.52213 19.3403C6.53667 19.3353 6.54937 19.3257 6.55851 19.3128C7.00528 18.6723 7.40331 17.9976 7.74448 17.2888C7.74921 17.2791 7.7519 17.2684 7.75239 17.2575C7.75287 17.2466 7.75114 17.2357 7.74729 17.2256C7.74345 17.2154 7.73759 17.2063 7.7301 17.1987C7.72261 17.1911 7.71366 17.1853 7.70386 17.1816C7.07857 16.9303 6.47325 16.6273 5.89359 16.2756C5.88305 16.2692 5.87419 16.2601 5.86776 16.2493C5.86134 16.2384 5.85756 16.2261 5.85676 16.2133C5.85596 16.2005 5.85816 16.1878 5.86316 16.1761C5.86817 16.1645 5.87583 16.1543 5.88546 16.1465C6.00731 16.0503 6.12915 15.9516 6.2452 15.8506C6.25553 15.8415 6.26808 15.8357 6.28142 15.8337C6.29475 15.8318 6.30833 15.8338 6.32063 15.8396C10.1187 17.6602 14.2313 17.6602 17.9841 15.8396C17.9965 15.8334 18.0102 15.8311 18.0238 15.8328C18.0373 15.8345 18.0502 15.8402 18.0607 15.8493C18.1768 15.9504 18.2974 16.0503 18.4205 16.1465C18.4302 16.1541 18.438 16.1641 18.4432 16.1757C18.4484 16.1872 18.4508 16.1999 18.4503 16.2126C18.4497 16.2254 18.4461 16.2378 18.4399 16.2488C18.4337 16.2597 18.425 16.2689 18.4147 16.2756C17.8356 16.63 17.2345 16.9295 16.6032 17.1804C16.5935 17.1843 16.5846 17.1904 16.5773 17.1981C16.5699 17.2059 16.5642 17.2152 16.5604 17.2254C16.5567 17.2356 16.5551 17.2465 16.5557 17.2575C16.5562 17.2684 16.559 17.2791 16.5638 17.2888C16.9119 17.9976 17.3099 18.671 17.7474 19.3104C17.7561 19.3239 17.7687 19.3341 17.7833 19.3395C17.7979 19.345 17.8138 19.3455 17.8286 19.3409C19.9165 18.6701 21.8799 17.6301 23.6343 16.2658C23.6428 16.2593 23.6499 16.2509 23.6551 16.2412C23.6603 16.2316 23.6635 16.2209 23.6644 16.2098C24.1483 10.9561 22.8533 6.39289 20.2331 2.34604C20.2265 2.33322 20.2146 2.32329 20.2017 2.31803ZM8.31193 13.4417C7.1689 13.4417 6.22663 12.3395 6.22663 10.9865C6.22663 9.63475 7.15033 8.53262 8.31193 8.53262C9.48396 8.53262 10.417 9.64328 10.3984 10.9865C10.3984 12.3395 9.47468 13.4417 8.31193 13.4417ZM16.0242 13.4417C14.88 13.4417 13.9389 12.3395 13.9389 10.9865C13.9389 9.63475 14.8626 8.53262 16.0242 8.53262C17.195 8.53262 18.128 9.64328 18.1095 10.9865C18.1095 12.3395 17.195 13.4417 16.0242 13.4417Z" fill="#012F6D" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Landing