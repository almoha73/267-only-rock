import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Zoom, FreeMode, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
import { ImageContext } from "../context/imagesContext";
import { useContext } from "react";

const CarouselGroupe = () => {
	const { slides } = useContext(ImageContext);
	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				loop={true}
				autoHeight={true}
				spaceBetween={10}
				navigation={true}
				modules={[Zoom, FreeMode, Navigation]}
				className="mySwiper w-11/12 sm:w-1/3 rounded-lg border-red-600 border-2 mb-2"
			>
				{slides.map((elt) => (
					<SwiperSlide key={elt.id}>
						<img className="rounded-lg block " src={elt?.href} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default CarouselGroupe;
