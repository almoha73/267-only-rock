import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import CarouselGallery from "../../components/CarouselGallery";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Photos = () => {
	return (
		<>
			<div className="flex flex-col w-Full h-auto">
				<Navbar />
				<main className="flex-1 w-full flex flex-col lg:flex-row items-center justify-center mt-40">
					<CarouselGallery />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Photos;
