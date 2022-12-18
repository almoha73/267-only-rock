import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// Context
import { ImageContext } from "../context/imagesContext";
import { useContext } from "react";

const Carousel = () => {
	const { slides } = useContext(ImageContext);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper w-11/12 sm:w-1/3 rounded-lg border-red-600 border-4 mb-2"
			>
				{slides.map((elt) => (
					<SwiperSlide key={elt.id}>
						<img className="rounded-lg block " src={elt?.href} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper  w-11/12 sm:w-1/3 cursor-pointer"
			>
				{slides.map((elt) => (
					<SwiperSlide key={elt.id}>
						<img
							className="mx-auto rounded-lg border-white border-2"
							src={elt?.href}
							alt=""
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default Carousel;
