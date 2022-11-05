import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import useApi from "../Api/useApi";
import uuid from "react-uuid";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import img from "../assets/groupe/"

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function Carousel() {
	const datas = useApi();
	console.log(datas);

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
					{datas && (
						datas?.map((elt) => (
							<SwiperSlide key={uuid()} className="bg-center bg-cover w-80 h-80">
								<img
									className="w-full flex items-center"
									
									src={`../../assets/groupe/${elt?.href}`}
									alt={elt?.titre}
								/>
							</SwiperSlide>
						)))}
					
				</Swiper>
			</div>
		</>
	);
}
