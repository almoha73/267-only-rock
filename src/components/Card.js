import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Card = ({ gallery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const handleImageClick = (image) => {
    if(window.innerWidth > 650){
      setSelectedImage(image);
      setIsModalOpen(true);
    }
   
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);


  return (
    <>
      {isModalOpen && (
        <Modal
          img={selectedImage}
          onRequestClose={handleModalClose}
        />
      )}
      <div className="block w-full cursor-pointer">
        <img
          onClick={() => handleImageClick(gallery)}
          src={gallery}
          alt=""
          className="w-full  sm:w-80 mb-8 rounded-lg shadow-md shadow-white "
        />
      </div>
    </>
  );
};

export default Card;
