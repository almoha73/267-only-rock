import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";

const CarouselGroupe = ({ slides }) => {
	console.log(slides);
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
				modules={[FreeMode, Navigation]}
				className="mySwiper w-[300px] h-auto min-h-[278px] sm:w-1/3 sm:h-auto rounded-lg shadow-lg shadow-white mb-2"
			>
				{slides?.map((elt) => (
					<SwiperSlide key={elt?.key}>
						<img
							className="rounded-lg  h-full w-full"
							src={elt?.slides?.photo}
							alt="groupe"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default CarouselGroupe;
