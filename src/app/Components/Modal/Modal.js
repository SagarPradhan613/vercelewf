'use client'
import React, { useState, useEffect, useContext } from 'react'
import { usePathname } from 'next/navigation'


const Modal = ({ isOpen, onClose, setOpenPrivacy, handleToggleModal }) => {
    const [userChoice, setUserChoice] = useState(null);
    const [activeModal, setActiveModal] = useState(false);
    const pathname = usePathname();

    const handleAccept = () => {
        setOpenPrivacy(false)
    };

    const handleDecline = () => {
        setOpenPrivacy(false);
    };

    if (!isOpen || userChoice) {
        return null;
    }

    return (
        <div className="modal lg:hidden flex justify-end fixed inset-0   bg-black bg-opacity-25 z-[100] backdrop-blur-sm">

            <div className='bg-white h-screen w-[80vw] relative py-20  px-10 flex flex-col pt-20'>
                <button
                    onClick={() => { handleToggleModal() }}
                    className="absolute top-4 right-6 text-black hover:text-gray-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#012F6D]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className='flex  justify-center px-6 align-middle items-center'>
                    {/* <img src='Images/blacktextlogo.png' className='z-10 hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300' ></img> */}
                    <svg width="81" height="31" viewBox="0 0 81 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.2684 6.25997C21.6717 4.5297 21.0303 3.35126 20.3441 2.72473C19.6878 2.0684 18.5965 1.56123 17.3458 1.56123V0.66625C17.495 0.66625 17.7188 0.651312 18.0171 0.621511C18.2856 0.591631 18.569 0.576768 18.8673 0.576768C20.5082 0.576768 21.985 0.949638 23.2976 1.69545C24.6401 2.44134 25.7141 3.96285 26.5196 6.25997L32.0459 23.1819L36.8341 8.99614L35.7601 5.9083C35.1635 4.17803 34.5221 2.99959 33.8359 2.37306C33.1795 1.71673 32.1801 1.32892 30.8377 1.20956V0.314579C30.9868 0.314579 31.1957 0.299641 31.4641 0.26984C31.7624 0.23996 32.0608 0.225098 32.3592 0.225098C34 0.225098 35.4767 0.597967 36.7894 1.34386C38.1319 2.08967 39.2059 3.61118 40.0115 5.9083L46.0079 23.1819L45.3366 30.6552H44.4417L37.8187 11.8154L31.3746 30.6552H30.4797L22.2684 6.25997Z" fill="#012F6D" />
                        <path d="M47.6736 6.25962C47.0768 4.52927 46.4354 3.35091 45.7493 2.72438C45.093 2.06804 44.0018 1.56088 42.751 1.56088V0.665897C42.9003 0.665897 43.124 0.650959 43.4223 0.621158C43.6908 0.591279 43.9742 0.576416 44.2725 0.576416C45.9134 0.576416 47.3905 0.949286 48.703 1.6951C50.0452 2.44099 51.1192 3.9625 51.9248 6.25962L57.451 23.1815C57.451 25.7485 56.9879 28.7324 56.7798 30.6548H55.885L47.6736 6.25962Z" fill="#012F6D" />
                        <path d="M4.39181 6.04165C4.39181 4.52014 4.18296 3.40138 3.76528 2.68537C3.34759 1.93955 2.5123 1.56661 1.25923 1.56661H0.364258V0.671631H20.0543C22.5901 0.671631 23.8581 1.86501 23.8581 4.25162V7.60789H22.9631C22.9631 4.17707 21.0985 2.46166 17.3693 2.46166H8.41928V14.0967H20.5019V15.8867H8.41928V28.4167H16.2505C18.3091 28.4167 19.9201 28.0438 21.0836 27.298C22.2471 26.5521 24.2284 23.4515 24.9146 21.6615L25.3258 22.7534L23.1869 27.9692C22.6498 29.4609 21.5311 30.2067 19.8306 30.2067H4.39181V6.04165Z" fill="#012F6D" />
                        <path d="M60.7689 6.49013C60.7689 4.96863 60.5601 3.84987 60.1424 3.13393C59.7247 2.38804 58.8893 2.01517 57.6363 2.01517H56.7415V1.12012H76.4314C78.9673 1.12012 80.2352 2.3135 80.2352 4.70018V8.05638H79.3404C79.3404 4.62556 77.4756 2.91015 73.7462 2.91015H64.7964V14.5452H76.8788V16.3352H64.7964V30.6552C63.4542 30.6552 60.7689 30.6552 60.7689 30.6552V6.49013Z" fill="#012F6D" />
                        <path d="M60.7689 25.3216C60.7689 26.8431 60.5601 27.9618 60.1424 28.6778C59.7247 29.4237 58.8893 29.7965 57.6363 29.7965H56.7415V30.6916C66.1903 31.0661 64.5023 29.7965 64.7964 28.9016V17.2665V15.4765V1.15649C63.4542 1.15649 60.7689 1.15649 60.7689 1.15649V25.3216Z" fill="#012F6D" />
                        <path d="M46.8832 12.7607L44.501 30.628H45.9287L48.2606 16.5267L46.8832 12.7607Z" fill="#012F6D" />
                    </svg>

                    {/* <div>
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9217 17.2197C18.4966 16.7975 17.8151 16.7975 17.3898 17.2197C17.1694 17.4418 17.0454 17.7435 17.0454 18.0581C17.0454 18.3278 17.1365 18.5878 17.3014 18.7965L17.3898 18.8963L19.7219 21.569C20.2904 22.1437 21.2122 22.1437 21.7807 21.569C22.3491 20.9945 22.3491 20.0628 21.7807 19.4881H21.7319L18.9217 17.2197ZM16.3144 2.7933C14.5448 1.00478 12.1449 0 9.64246 0C4.43142 0 0.207031 4.26983 0.207031 9.53694C0.207031 14.804 4.43142 19.0739 9.64246 19.0739C14.8535 19.0739 19.0779 14.804 19.0779 9.53694C19.0779 7.00758 18.0838 4.58182 16.3144 2.7933ZM9.70703 17C13.8492 17 17.207 13.6421 17.207 9.5C17.207 5.35786 13.8492 2 9.70703 2C5.5649 2 2.20703 5.35786 2.20703 9.5C2.20703 13.6421 5.5649 17 9.70703 17Z" fill="#012F6D" />
                        </svg>
                    </div> */}


                </div>
                <div className='h-[1px]  w-[100%] bg-black mt-6'>
                </div>
                <div className="flex flex-col justify-between h-full lg:space-x-10 space-y-5 align-middle items-center mt-6 text-center">
                    <div className='flex justify-center items-center'>
                        <div className=' hover:transform hover:scale-110 hover:transition-transform hover:ease-in hover:duration-300'>
                            <a href='/'>
                                <div className='bg-[#012F6D] text-white px-10 py-3  rounded-[5px]  ' >
                                    <p className='md:text-lg text-sm font-medium'>
                                      Join Us
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>







                </div>
            </div>
        </div>
    );
};

export default Modal;
