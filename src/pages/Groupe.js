import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CarouselGroupe from "../components/CarouselGroupe";
import Footer from "../components/Footer";
import logoWhite from "../assets/logoWhite.svg";
import logosansFond from "../assets/logosansFond.svg";

import { getPhotoGroupe, getSlides } from "../utils/fetchPhotos";

const Groupe = () => {
	const [slides, setSlides] = useState([]);
	const [groupe, setGroupe] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			const result = [];

			const data = await getSlides();

			console.log(data);
			await data.forEach((query) =>
				result.push({ key: query.id, slides: query.data() })
			);

			setSlides(result);
		};
		loadData();
	}, [slides.length, groupe.length]);

	useEffect(() => {
		const loadData = async () => {
			const result2 = [];
			const data2 = await getPhotoGroupe();
			await data2.forEach((query) =>
				result2.push({ key: query.id, photoGroupe: query.data() })
			);
			setGroupe(result2);
		};
		loadData();
	}, [groupe.length]);

	console.log(slides, groupe);
	return (
		<>
			<div className="w-full h-auto flex flex-col">
				<Navbar />
				<main className="flex-1 h-auto  flex  flex-col w-full  mt-32">
					<div className="w-full flex items-center justify-center mb-8">
						<span className="w-20 block mr-2">
							<img src={logosansFond} alt="" className="w-full" />
						</span>
						<h1 className="title-group text-red-600 text-4xl text-center">
							Le groupe
						</h1>
					</div>

					<ul className="flex w-11/12 mx-auto flex-wrap gap-4 text-white text-lg sm:text-2xl  justify-center sm:justify-center mb-6">
						<li>ZZ Top</li>
						<li>Creed Dance</li>
						<li>Beatles</li>
						<li>Rolling Stones</li>
						<li>Billy Idol</li>
						<li>...</li>
					</ul>
					<div className="w-11/12  flex justify-center items-center mx-auto">
						<img
							src={groupe[0]?.photoGroupe?.photo}
							alt="groupe"
							className=" mx-auto border-white border mb-6  w-full sm:w-1/3"
						/>
					</div>

					<div className="w-10/12 mx-auto leading-7 text-lg sm:text-xl sm:leading-8 text-justify">
						<img src={logoWhite} alt="" className=" w-20 float-left" />
						<p className="text-white tracking-wide indent-8 mb-2">
							est un groupe de rock créé fin 2015 par Laurent (chant), Ricardo
							(guitare rythmique) Bob (basse), Pat (guitare solo).
						</p>
						<p className="text-white tracking-wide indent-8 mb-2">
							En janvier 2016 Nick vient compléter le groupe en tant que
							batteur.
						</p>
						<p className="text-white tracking-wide indent-8 mb-2">
							Moins de 3 mois après son arrivée, le groupe assure une première
							date pour la fête de la musique à Saint Denis de Pile. 267 assure
							ensuite des concert privé le même été.
						</p>
						<p className="text-white tracking-wide indent-8 mb-2">
							En Février 2017, 267 rentre au Garden Studio de{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://soundcloud.com/st-phane-desplat"
								className="text-red-600"
							>
								Stéphane Desplat
							</a>
							, pour enregistrer quatre titres pour{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://bongoboyrecords.com/garfrancis/"
								className="text-red-600"
							>
								Gar Francis
							</a>
							, qui a été séduit par sa reprise "I love girl". Gar francis a
							contacté les 267 pour les intégrer à son label américain
							indépendant. En 2017, un des morceaux apparaîtra dans une
							compilation rock dans l'est Américain. lors d'un vote, les
							internautes classeront le groupe 267 4eme sur les 14 artistes
							présents.
						</p>
						<p className="text-white tracking-wide indent-8 mb-2">
							En septembre 2017, ricardo et bob quittent la formation. Al first
							remplacera Bob et nous décidons de ne pas remplacer
							Ricardo.Désormais le groupe existe avec 4 artistes.
						</p>
						<p className="text-white tracking-wide indent-8 mb-6">
							Avril 2018 267 participe au premier Festival "Du rock mon pote.
							Nous finirons la saison en juin 2018 avec un problème de santé de
							Al firts qui l'oblige à stopper la musique. Après plusieurs mois
							de réflexion, nous décidons de recruter un nouveau bassiste et un
							batteur, car entre temps Nick n'a pas souhaité reprendre. Janvier
							2019 voit l'arrivée de David à la batterie et de Vincent à la
							basse. Depuis, le groupe enchaîne les concerts toutes l'année dans
							des festivals, bar, salon.
						</p>
					</div>
					<CarouselGroupe slides={slides} />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Groupe;
