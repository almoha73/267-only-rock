import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Musiciens = () => {
	return (
		<div className="w-full h-auto ">
			<Navbar />
			<main className="w-full md:h-auto flex-1 flex justify-start	 items-center flex-col">
				{/* <Thumb /> */}
			</main>
			<Footer />
		</div>
	);
};

export default Musiciens;
