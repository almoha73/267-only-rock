import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ gallery }) => {
	const [toggleBig, setToggleBig] = useState(false);
	const toggleClass = (e) => {
		const choice = e.target;
		console.log(choice);
		setToggleBig(!toggleBig);
	};
	return (
		<Link
			to="#"
			onClick={toggleClass}
			className={
				toggleBig
					? "block w-full lg:scale-[1.6] lg:cursor-pointer"
					: "block w-full aspect-auto lg:cursor-pointer"
			}
		>
			<img
				src={gallery?.gallery?.photo}
				alt=""
				className="w-full  sm:w-80 mb-8 rounded-lg shadow-md shadow-white "
			/>
		</Link>
	);
};

export default Card;
