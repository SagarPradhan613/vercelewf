'use client'
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";

export default function Calendly() {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next"));
    }
  }, []);

  return (
    <div className="cal_div">
      <PopupButton
        className="rounded-md whitespace-nowrap bg-primary hover:text-[rgba(255,255,255,0.5)] text-white transition-all duration-700 ease-in-out  text-base font-semibold   "
        url="https://calendly.com/ewfcapital"
        rootElement={rootElement}
        text="Book your appointment now"
      />
    </div>
  );
}

