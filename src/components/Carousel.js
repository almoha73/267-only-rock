import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Carousel() {
	return (
		<>
			<div className="carousel w-full h-screen flex items-start">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					navigation={true}
					loop={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="mySwiper w-2/3 h-2/3"
				>
					<SwiperSlide className="bg-center bg-cover w-80 h-80">
						<img
							className="w-full flex items-center"
							src="https://swiperjs.com/demos/images/nature-1.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 h-80">
						<img
							className="w-full block"
							src="https://swiperjs.com/demos/images/nature-2.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 h-80">
						<img
							className="w-full block"
							src="https://swiperjs.com/demos/images/nature-3.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 h-80">
						<img
							className="w-full block"
							src="https://swiperjs.com/demos/images/nature-4.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 h-80">
						<img
							className="w-full block"
							src="https://swiperjs.com/demos/images/nature-5.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 h-80">
						<img
							className="w-full block"
							src="https://swiperjs.com/demos/images/nature-6.jpg"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 -80">
						<img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
					</SwiperSlide>
					<SwiperSlide className="bg-center bg-cover	w-80 -80">
						<img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
