import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { ImageContext } from "../context/imagesContext";
import { useContext } from "react";

const Carousel = () => {
	const { slides } = useContext(ImageContext);

	console.log(slides);
	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={1}
			speed={500}
			loop={true}
			touchRatio={1.5}
			navigation={true}
			effect={"flip"}
			pagination={{ clickable: true }}
			className="mySwiper w-2/3"
		>
			{slides.map((elt) => (
				<SwiperSlide key={elt.id}>
					<img className="mx-auto" src={elt?.href} alt="" />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
