/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { ImageContext } from "../context/imagesContext";
import { useContext } from "react";
import logoWhite from "../assets/logoWhite.svg";

const Groupe = () => {
	const { groupe } = useContext(ImageContext);
	console.log(groupe);

	return (
		<div className="w-full h-screen flex flex-col">
			<Navbar />
			<main className="flex-1 my-8 w-full">
				<h1 className="text-red-600 text-5xl text-center mb-6">
					Le groupe 267
				</h1>

				<ul className="flex gap-4 text-white text-2xl justify-center mb-6">
					<li>ZZ Top</li>
					<li>Creed Dance</li>
					<li>Beatles</li>
					<li>Rolling Stones</li>
					<li>Billy Idol</li>
					<li>...</li>
				</ul>
				<img
					src={groupe[0]?.href}
					alt=""
					className="block w-2/3 mx-auto  mb-6"
				/>
				<div className="w-10/12 mx-auto leading-7">
					<img src={logoWhite} alt="" className="w-20 float-left" />
					<p className="text-white tracking-wide indent-8 mb-2">
						est un groupe de rock créé fin 2015 par Laurent (chant), Ricardo
						(guitare rythmique) Bob (basse), Pat (guitare solo).
					</p>
					<p className="text-white tracking-wide indent-8 mb-2">
						En janvier 2016 Nick vient compléter le groupe en tant que batteur.
					</p>
					<p className="text-white tracking-wide indent-8 mb-2">
						Moins de 3 mois après son arrivée, le groupe assure une première
						date pour la fête de la musique à Saint Denis de Pile. 267 assure
						ensuite des concert privé le même été.
					</p>
					<p className="text-white tracking-wide indent-8 mb-2">
						En Février 2017, 267 rentre au Garden Studio de Stéphane Desplat,
						pour enregistrer quatre titres pour Gar Francis, qui a été séduit
						par sa reprise "I love girl". Gar francis a contacté les 267 pour
						les intégrer à son label américain indépendant. En 2017, un des
						morceaux apparaîtra dans une compilation rock dans l'est Américain.
						lors d'un vote, les internautes classeront le groupe 267 4eme sur
						les 14 artistes présents.
					</p>
					<p className="text-white tracking-wide indent-8 mb-2">
						En septembre 2017, ricardo et bob quittent la formation. Al first
						remplacera Bob et nous décidons de ne pas remplacer
						Ricardo.Désormais le groupe existe avec 4 artistes.
					</p>
					<p className="text-white tracking-wide indent-8 mb-6">
						Avril 2018 267 participe au premier Festival "Du rock mon pote. Nous
						finirons la saison en juin 2018 avec un problème de santé de Al
						firts qui l'oblige à stopper la musique. Après plusieurs mois de
						réflexion, nous décidons de recruter un nouveau bassiste et un
						batteur, car entre temps Nick n'a pas souhaité reprendre. Janvier
						2019 voit l'arrivée de David à la batterie et de Vincent à la basse.
						Depuis, le groupe enchaîne les concerts toutes l'année dans des
						festivals, bar, salon.
					</p>
				</div>

				<Carousel />
			</main>
		</div>
	);
};

export default Groupe;
