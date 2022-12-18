import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Musiciens = () => {
	return (
		<div className="w-full h-auto flex flex-col">
			<Navbar />
			<main className="w-full mt-32 md:h-auto flex-1 flex items-center flex-col"></main>
			<Footer />
		</div>
	);
};

export default Musiciens;
