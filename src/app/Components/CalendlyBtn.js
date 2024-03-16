'use client'
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function CalendlyBtn() {
    const [rootElement, setRootElement] = useState(null);

    useEffect(() => {
        // Wait for the component to be mounted before setting the rootElement
        if (typeof window !== "undefined") {
            setRootElement(document.getElementById("__next"));
        }
    }, []);

    return (
        <div className='flex different-mouse bg-[#012F6D] transform hover:scale-110 transition-transform duration-500 px-6 lg:px-9 py-3 items-center justify-center gap-3'>
            <div>
                <PopupButton
                    className="font-bold text-sm lg:text-base text-white"
                    url="https://calendly.com/ewfcapital"
                    rootElement={rootElement}
                    text="Book Appointment"
                />
            </div>
            <div className="lg:block hidden">
                <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.251 6.53814C18.5439 6.24525 18.5439 5.77038 18.251 5.47748L13.4781 0.704512C13.1852 0.411618 12.7103 0.411618 12.4174 0.704512C12.1245 0.997405 12.1245 1.47228 12.4174 1.76517L16.66 6.00781L12.4174 10.2505C12.1245 10.5433 12.1245 11.0182 12.4174 11.3111C12.7103 11.604 13.1852 11.604 13.4781 11.3111L18.251 6.53814ZM0.720703 6.75781H17.7207V5.25781H0.720703V6.75781Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}