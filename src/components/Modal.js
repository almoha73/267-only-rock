import React from "react";

export default function Modal({ img, close, clienty }) {
  return (
    <>
      <div
        className="bg-black h-screen w-screen fixed opacity-50 top-0 left-0 right-0 bottom-0"
        onClick={close}
      ></div>
      <div className={`sm:h-2/3 rounded-xl z-10 absolute top-[${clienty}px] left-1/4`}>
        <img src={img} alt="" className="w-full h-full" />
      </div>
    </>
  );
}
