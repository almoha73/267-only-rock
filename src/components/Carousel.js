import { useSelector, useDispatch } from "react-redux";
import { getSlides } from "../redux/slide/slideReducer";
import { useEffect } from "react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const Carousel = () => {
	const { slides } = useSelector((state) => ({
		...state.slideReducer,
	}));
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSlides());
	}, [dispatch]);

	console.log(slides[0]?.image);

	return (
		<>
			<div className="w-full h-80  md:h-screen slide-container flex justify-center items-start ">
				<Swiper
					direction={"vertical"}
					slidesPerView={1}
					spaceBetween={30}
					mousewheel={true}
					pagination={{
						clickable: true,
					}}
					modules={[Mousewheel, Pagination]}
					className="mySwiper h-full rounded-xl w-80 md:w-3/5 md:h-3/5"
				>
					{slides.map((elt, index) => (
						<SwiperSlide
							key={index}
							className="text-center text-lg bg-white flex justify-center items-center"
						>
							<img
								src={`../assets/groupe/${elt.image}`}
								alt=""
								className="object-cover w-full h-full"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
};

export default Carousel;
