import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";

const Groupe = () => {
	return (
		<div className="w-screen h-screen">
			<Navbar />
			<h1 className="text-4xl text-white text-center my-8">Groupe</h1>
			
				<Carousel />
			
		</div>
	);
};

export default Groupe;
