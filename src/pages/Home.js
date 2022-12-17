import React from "react";
import logosansFond from "../assets/logosansFond.svg";

const Home = () => {
	return (
		<>
			<div className="w-full h-screen flex flex-col justify-center items-center">
				<div className="mb-20 md:w-3/4 lg:w-1/2 sm:mb-0">
					<img src={logosansFond} alt="" className="fill-white" />
				</div>
				<button className="btn-home 	">
					<a
						href="/homeboard"
						className="border-solid	border-2 border-red-500 text-white text-3xl tracking-widest bg-transparent p-3 rounded-lg overflow-hidden"
					>
						ENTRÉE
					</a>
				</button>
			</div>
		</>
	);
};

export default Home;
