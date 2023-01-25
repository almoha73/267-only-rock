import React, { useEffect } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import { getGallery } from "../../utils/fetchPhotos";
import { useState } from "react";

const Photos = () => {
	const [gallery, setGallery] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const loadData = async () => {
			const result = [];
			const data = await getGallery();
			await data.forEach((query) =>
				result.push({ key: query.id, gallery: query.data() })
			);
			setGallery(result);
		};
		loadData();
		setLoading(false);
	}, [gallery.length]);

	console.log(gallery);

	return (
		<>
			<div
				className="flex flex-col w-Full h-auto "
				// style={{ backgroundImage: `url(${bg})` }}
			>
				<Navbar />
				<main className="flex-1 w-full flex flex-col items-center justify-center sm:mt-40 mt-32">
					<h1 className="galleryTitle text-4xl text-red-600 underline mb-12">
						Gallerie photos
					</h1>
					{loading ? (
						<>...Loading</>
					) : (
						<div className=" sm:w-10/12 flex justify-center bg-neutral-800 sm:py-16 p-4">
							<div className="sm:ml-1/12 sm:columns-2 lg:columns-3 xl:columns-4 sm:gap-8">
								{gallery &&
									gallery?.map((elt) => <Card gallery={elt} key={elt.key} />)}
							</div>
						</div>
					)}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Photos;
