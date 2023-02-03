import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoWhite from "../assets/logoWhite.svg";
import logosansFond from "../assets/logosansFond.svg";
import bg from "../assets/bg_2.jpg";
import { getPhotoGroupe } from "../utils/fetchPhotos";
import NewEvenement from "../components/NewEvenement";

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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <>
      <div
        className="w-full h-auto flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
      <Navbar />
        <main className="w-full mt-24 xl:mt-32 md:h-auto flex-1 flex items-center flex-col">
          <div className="w-full items-center justify-center mb-8 ">
            <NewEvenement />
            <div className="flex justify-center items-center">
              <span className="w-20 block mr-2">
                <img src={logosansFond} alt="" className="w-full" />
              </span>
              <h1 className="title-group text-red-600 text-4xl text-center">
                Le groupe
              </h1>
            </div>
          </div>

          <ul className="flex w-11/12 mx-auto flex-wrap gap-4 text-white text-lg sm:text-2xl  justify-center sm:justify-center  sm:mb-12">
            <li>ZZ Top</li>
            <li>Creedence</li>
            <li>Rolling Stones</li>
            <li>Billy Idol</li>
            <li>...</li>
          </ul>
          <div
            className="sm:w-10/12 w-full mx-auto my-8 bg-neutral-800 p-5 rounded"
            style={{
              transition: "all 0.5s ease-in-out",
              opacity: isVisible ? 1 : 0,
              transform: `translateX(${isVisible ? 0 : 60}px)`,
            }}
          >
            <img
              src={groupe[0]?.photoGroupe?.photo}
              alt="groupe"
              className="groupeImg inline-block mb-8 sm:float-left objet-fit-cover  border-white border  sm:w-1/3  sm:mr-4 "
            />

            <img
              src={logoWhite}
              alt=""
              className="groupeLogo w-16 h-16 float-left"
            />
            <p className="text-white tracking-wide text-justify  mb-2 xl:text-xl md:text-md">
              est un groupe de rock créé fin 2015 par Laurent (chant), Ricardo
              (guitare rythmique) Bob (basse), Pat (guitare solo).
              <br />
              En janvier 2016 Nick vient compléter le groupe en tant que
              batteur.
              <br />
              Moins de 3 mois après son arrivée, le groupe assure une première
              date pour la fête de la musique à Saint-Denis-de-Pile. 267 assure
              ensuite des concert privés le même été.
              <br />
              <br />
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
              remplacera Bob et nous décidons de ne pas remplacer Ricardo.
              Désormais le groupe existe avec 4 artistes.
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Groupe;
