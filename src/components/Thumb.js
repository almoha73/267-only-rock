import { v4 as uuidv4 } from "uuid";

import React from "react";

const Thumb = ({ key }) => {
	return (
		<>
			{/* {musiciens?.map((elt) => (
				<>
					<div
						key={(key = uuidv4())}
						className=" h-auto w-full flex flex-col md:flex-row content-start items-center mb-10 md:h-2/5 md:w-10/12 md-flex md:justify-center md:items-start md:mt-10 md:gap-10"
					>
						<h1 className="text-4xl md:hidden text-white mb-10">{elt?.nom}</h1>

						<div className="shape-inner sign-right h-full md:my-auto md:mx-auto	w-72 md:w-2/5 lg:w-4/12 md:h-full bg-cover   ">
							<img
								src={`../assets/groupe/${elt?.photo}`}
								alt=""
								className="w-full h-full object-fill rounded-2xl	"
							/>
						</div>

						<div className="mt-10 w-10/12 md:h-full md:w-1/2 ">
							<h1 className="text-4xl hidden md:block text-white text-center mb-10">
								{elt?.nom}
							</h1>
							<p className="text-justify text-white">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Expedita, veniam sapiente sint quidem quisquam consequatur
								molestias et officia quas nesciunt, soluta aspernatur pariatur
								doloremque necessitatibus aperiam est totam. Non tempore
								suscipit ullam fugit dolor itaque qui repellendus eum blanditiis
								maiores porro excepturi provident voluptatem, autem architecto
								ipsam distinctio ex tenetur ducimus culpa assumenda. Ad pariatur
								dignissimos eveniet quia ex eum tempora aliquam dolorem ab
								accusantium. Ex corrupti similique laudantium molestiae magni
								expedita saepe, totam accusantium ipsam maiores praesentium hic
								debitis? Neque omnis qui pariatur doloremque assumenda vitae
								perferendis optio asperiores officiis quo quam nihil ducimus,
								accusantium eveniet. Tempora, sed libero.
							</p>
						</div>
					</div>
				</>
			))} */}
		</>
	);
};

export default Thumb;
