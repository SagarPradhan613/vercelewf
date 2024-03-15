'use client';
import React, { useState, useEffect, useContext } from "react";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import Landing from "./Pages/Landing/landing";
import Head from 'next/head';


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
        <link rel="shortcut icon" href="/Images/favicon.ico" />
      </Head>

      <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy}></Modal>
      <Header handleToggleModal={handleToggleModal} openPrivacy={openPrivacy} setOpenPrivacy={setOpenPrivacy} />
      <Landing />

    </>
  )
}
