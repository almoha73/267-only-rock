import React from "react";

export default function Modal({ img, onRequestClose }) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <>
      <div
        className="bg-black h-screen w-full fixed opacity-100 top-0 left-0 right-0 bottom-0  "
        onClick={onRequestClose}
      >
        <div className="modal max-h-[700px]" style={modalStyle}>
          <img src={img} alt="" className="block " />
        </div>
      </div>
    </>
  );
}
