import React from "react";

export default function Modal({ img, setIsOpen }) {
	return (
		<>
			<div
				onClick={() => setIsOpen(false)}
				className="bg-black h-screen w-full fixed opacity-50 top-0 left-0 bottom-0 right-0 "
			></div>
			<div className=" h-auto w-full sm:w-1/2 rounded-xl z-10 absolute top-40 left-[1/2] ">
				<img src={img} alt="" className="" />
			</div>
		</>
	);
}
