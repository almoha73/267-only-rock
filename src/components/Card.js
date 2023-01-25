import React, { useState } from "react";

import Modal from "./Modal";

const Card = ({ gallery }) => {
	const [open, setOpen] = useState(false);
	const [img, setImg] = useState("");
	const toggleModal = (e) => {
		console.log(e, e.target);
		setImg(e.target.currentSrc);
		setOpen(true);
	};
	return (
		<>
			{open && <Modal img={img} setIsOpen={setOpen} />}
			<div onClick={toggleModal} className={"block w-full cursor-pointer"}>
				<img
					src={gallery?.gallery?.photo}
					alt=""
					className="w-full  sm:w-80 mb-8 rounded-lg shadow-md shadow-white "
				/>
			</div>
		</>
	);
};

export default Card;
