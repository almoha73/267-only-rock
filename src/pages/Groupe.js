import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
//import CarouselGroupe from "../components/CarouselGroupe";
import Footer from "../components/Footer";
import logoWhite from "../assets/logoWhite.svg";
import logosansFond from "../assets/logosansFond.svg";

import { getPhotoGroupe, getSlides } from "../utils/fetchPhotos";

const Groupe = () => {
	
	const [groupe, setGroupe] = useState([]);

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

	console.log(groupe);
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

					<ul className="flex w-11/12 mx-auto flex-wrap gap-4 text-white text-lg sm:text-2xl  justify-center sm:justify-center  sm:mb-12">
						<li>ZZ Top</li>
						<li>Creed Dance</li>
						<li>Beatles</li>
						<li>Rolling Stones</li>
						<li>Billy Idol</li>
						<li>...</li>
					</ul>
					<div className="sm:w-10/12 mx-auto my-8 bg-neutral-800 p-3 sm:p-5 rounded">
						<img
							src={groupe[0]?.photoGroupe?.photo}
							alt="groupe"
							className="groupeImg inline-block mb-8 sm:float-left objet-fit-cover  border-white border  sm:w-1/3  sm:mr-4 "
						/>
					

					
						<img src={logoWhite} alt="" className="groupeLogo w-16 h-16 float-left" />
						<p className="text-white tracking-wide text-justify  mb-2 xl:text-xl md:text-md">
							est un groupe de rock créé fin 2015 par Laurent (chant), Ricardo
							(guitare rythmique) Bob (basse), Pat (guitare solo).
						<br />
						 
							En janvier 2016 Nick vient compléter le groupe en tant que
							batteur.
						<br />
						
							Moins de 3 mois après son arrivée, le groupe assure une première
							date pour la fête de la musique à Saint-Denis-de-Pile. 267 assure
							ensuite des concert privé le même été.
						
						<br /><br />
							En Février 2017, 267 rentre au Garden Studio de{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://soundcloud.com/st-phane-desplat"
								className="text-red-300"
							>
								Stéphane Desplat
							</a>
							, pour enregistrer quatre titres pour{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://bongoboyrecords.com/garfrancis/"
								className="text-red-300"
							>
								Gar Francis
							</a>
							, qui a été séduit par sa reprise "I love girl". Gar francis a
							contacté les 267 pour les intégrer à son label américain
							indépendant. En 2017, un des morceaux apparaîtra dans une
							compilation rock dans l'est Américain. lors d'un vote, les
							internautes classeront le groupe 267 4eme sur les 14 artistes
							présents.
						
						<br /> <br />
							En septembre 2017, Ricardo et Bob quittent la formation. Al first
							remplacera Bob et nous décidons de ne pas remplacer
							Ricardo. Désormais le groupe existe avec 4 artistes.
						
						<br /> <br />
							Avril 2018 267 participe au premier Festival "Du rock mon pote".
							Nous finirons la saison en juin 2018 avec un problème de santé de
							Al firts qui l'oblige à stopper la musique. Après plusieurs mois
							de réflexion, nous décidons de recruter un nouveau bassiste et un
							batteur, car entre temps Nick n'a pas souhaité reprendre. Janvier
							2019 voit l'arrivée de David à la batterie et de Vincent à la
							basse. Depuis, le groupe enchaîne les concerts toutes l'année dans
							des festivals, bar, salon.
						</p>
					</div>
					{/* <CarouselGroupe slides={slides} /> */}
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Groupe;
