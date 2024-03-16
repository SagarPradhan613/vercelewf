'use client';
import React, { useState, useEffect, useContext } from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Landing from "./Pages/Landing/landing";
import Head from 'next/head';
import CalendlyDynamic from "./Components/CalendlyDynamic";
import CalendlyBtnDynamic from './Components/CalendlyBtnDynamic';


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    if (openPrivacy) {
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false);
    }
  }, [openPrivacy]);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleToggleModal = () => {
    setOpenPrivacy(!openPrivacy); // Toggle the privacy state
  };
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>

      <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy}></Modal>
      <Header handleToggleModal={handleToggleModal} openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy} />
      <CalendlyDynamic />
      {/* <CalendlyBtnDynamic /> */}
      <Landing />

    </>
  )
}
