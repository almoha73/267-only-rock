import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ gallery }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const [clienty, setClienty] = useState("0px");

  const openModal = (e) => {
    console.log(e.target);
    console.log(e);
    setOpen(true);
    //window.scrollTo(0, 0);
    setImg(e.target.currentSrc);
    setClienty(e.clientY);
    console.log(clienty);
  };

  const closeModal = (e) => {
    if (e.target.currentSrc !== img) {
      setOpen(false);
      setImg("");
    }
  };
  return (
    <>
      {open && <Modal img={img} close={closeModal} clienty={clienty} />}
      <div className="block w-full cursor-pointer" onClick={openModal}>
        <img
          src={gallery}
          alt=""
          className="w-full  sm:w-80 mb-8 rounded-lg shadow-md shadow-white "
        />
      </div>
    </>
  );
};

export default Card;
