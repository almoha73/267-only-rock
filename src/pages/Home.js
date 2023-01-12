import React from "react";
import logosansFond from "../assets/logosansFond.svg";

const Home = () => {
	return (
		<>
			<div className="w-full h-screen sm:h-auto flex flex-col justify-center items-center">
				<div className="mb-20 max-w-[700px]">
					<img src={logosansFond} alt="" className="" />
				</div>
				<button className="btn-home ">
					<a
						href="/homeboard"
						className="border-solid	border-2 border-red-500 text-white text-3xl tracking-widest bg-transparent p-3 rounded-lg "
					>
						ENTRÉE
					</a>
				</button>
			</div>
		</>
	);
};

export default Home;
