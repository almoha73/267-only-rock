import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { getMusiciens } from "../utils/fetchPhotos";
import bg from "../assets/bg_2.jpg";
import { gsap } from "gsap";

const animateElement = (element) => {
  gsap.to(element, {
    duration: 1,
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
  });
};

const Musiciens = () => {
  const [musiciens, setMusiciens] = useState([]);

  useEffect(() => {
    const array = [];
    const loadData = async () => {
      const data = await getMusiciens();
      await data.forEach((query) =>
        array.push({ key: query.id, musiciens: query.data() })
      );
      setMusiciens(array);
    };
    loadData();
  }, [musiciens.lenght]);

  console.log(musiciens);

  // animation
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="w-full h-auto flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <main className="w-full mt-24 xl:mt-32 md:h-auto flex-1 flex items-center flex-col">
        <h1 className="musiciensTitle text-red-600 text-2xl lg:text-4xl sm:mt-8 xl:mt-0">
          Les musiciens
        </h1>
        <div className=" sm:w-11/12 py-8">
          <article
            ref={ref1}
            style={{ opacity: 0, transform: "translateY(60px)" }}
            className="w-11/12 mx-auto bg-neutral-800 p-4"
          >
            <div className="flex flex-col lg:flex-row lg:items-center">
              <img
                src={musiciens[3]?.musiciens.photo}
                alt="Laurent"
                className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded   object-cover "
              />
              <div className="sm:p-4 xl:p-8">
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[3]?.musiciens.nom}, chant
                </h2>
                <p className="text-justify text-white text-base">
                  Tessiture Baryton Né à Bordeaux. <br /> Dès l'adolescence le
                  rock est entré dans ma vie. Mes influences sont orientées
                  Métal, Hard Rock et Rock. J'ai passé 4 ans à la rock School
                  Barbey, ce qui m'a permis d'intégrer le groupe BLAM en 1999,
                  style Rock, avec des morceaux majoritairement faits de
                  compositions. <br /> J'ai ensuite débuté le chant en 2011 et
                  intégré le groupe Amproad , style Rock, Hard rock basé sur des
                  reprises des grands classiques (metallica, radiohead ...) et
                  quelques compositions. <br /> Désormais chanteur du groupe 267
                  dans un style Rock bien pêchu et ce depuis 2015.
                </p>
              </div>
            </div>
          </article>
          <article
            ref={ref2}
            style={{ opacity: 0, transform: "translateY(60px)" }}
            className="w-11/12 mx-auto my-8 bg-neutral-800 p-4"
          >
            <div className="flex flex-col-reverse lg:flex-row">
              <div className="sm:p-4 xl:p-8">
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[2]?.musiciens.nom}, guitare
                </h2>
                <p className="text-justify text-white text-base">
                  J'ai commencé à jouer de la guitare acoustique à l'âge de 16
                  ans. A cette époque lointaine, les méthodes de fingerpicking
                  de Marcel Dadi étaient à la mode et je suis entré très tôt
                  dans ce style de jeu aux doigts. <br /> Mes débuts sur
                  électrique remontent aux années 90 avec la découverte des
                  fabuleux disques «Living Chicago Blues» qui ont accompagné mes
                  premières gammes de guitariste soliste. <br /> Après une
                  expérience au sein du groupe «Mary's Family Blues Band» de
                  Bordeaux, retour à l'acoustique et au fingerpicking dans le
                  duo «Kool and pickers » accompagné d'un camarade excellent
                  guitariste picking. <br /> Et enfin 2016, retour à
                  l'électrique avec l'envie d'envoyer du gros son. Ce sera le
                  groupe 267 et aujourd'hui une bande de bons copains toujours
                  prêts à jouer... un peu trop fort...
                </p>
              </div>
              <img
                src={musiciens[2]?.musiciens.photo}
                alt="Patrick"
                className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded object-cover "
              />
            </div>
          </article>
          <article
            ref={ref3}
            style={{ opacity: 0, transform: "translateY(60px)" }}
            className="w-11/12 xl:w-1/2 mx-auto bg-neutral-800 p-4"
          >
            <div className="lg:flex lg:justify-evenly ">
              <div className="mb-8 sm:mb-0 sm:flex sm:flex-col sm:justify-center sm:items-center">
                <img
                  src={musiciens[1]?.musiciens.photo}
                  alt="Laurent"
                  className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded   object-cover"
                />
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[1]?.musiciens.nom}, basse
                </h2>
              </div>
            </div>
            {/* <div className="flex flex-col lg:flex-row lg:items-center">
              <img
                src={musiciens[1]?.musiciens.photo}
                alt="Laurent"
                className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded   object-cover"
              />
              <div className="sm:p-4 xl:p-8">
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[1]?.musiciens.nom}, basse
                </h2>
                <p className="text-justify text-white text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  voluptatem eveniet repellat distinctio ut sunt eos obcaecati.
                  Eius sapiente reprehenderit error fugiat ullam cumque ipsa
                  voluptas inventore ratione! Vitae et, repellendus officia
                  magni vel, libero iusto est quidem ea, architecto quam.
                  Reiciendis, impedit provident, nostrum mollitia rem quia
                  fugiat ratione obcaecati dolores eum dolorem porro. Quia,
                  aliquid quam ratione libero ipsum, sequi, officia natus vitae
                  deserunt totam in. Facilis hic vero et magni enim? Voluptates
                  dignissimos, commodi dolores explicabo molestiae repellendus
                  dolor quam repudiandae. Pariatur illo amet perspiciatis minima
                  cupiditate ipsum veritatis tempore similique recusandae, et
                  dolor alias facilis doloremque.
                </p>
              </div>
            </div> */}
          </article>
          <article
            ref={ref4}
            style={{ opacity: 0, transform: "translateY(60px)" }}
            className="w-11/12 xl:w-1/2 mx-auto my-8 bg-neutral-800 p-4"
          >
            <div className="lg:flex lg:justify-evenly ">
              <div className="mb-8 sm:mb-0 sm:flex sm:flex-col sm:justify-center sm:items-center">
                <img
                  src={musiciens[0]?.musiciens.photo}
                  alt="Laurent"
                  className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded object-cover"
                />
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[0]?.musiciens.nom}, batterie
                </h2>
              </div>
            </div>
            {/* <div className="flex flex-col-reverse lg:flex-row">
              <div className="sm:p-4 xl:p-8">
                <h2 className="text-white text-xl mb-4 text-center lg:text-2xl mt-4">
                  {musiciens[0]?.musiciens.nom}, batterie
                </h2>
                <p className="text-justify text-white text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  unde sequi aliquid inventore vitae iusto esse eveniet,
                  mollitia eius vel culpa id doloremque adipisci repellendus
                  dolor totam facilis repellat error! Sequi asperiores in modi
                  quo fuga quis numquam fugiat neque, molestias ea mollitia
                  voluptatum aperiam nobis sint accusamus expedita non eius.
                  Repudiandae sed laudantium molestias esse debitis numquam
                  totam aspernatur quasi voluptas fugiat. Voluptate eum dolore
                  inventore eos ducimus obcaecati similique laborum quis.
                  Reiciendis totam, quis natus, cupiditate voluptatem facilis
                  reprehenderit exercitationem consequuntur nulla neque earum
                  asperiores vitae sapiente cum! Iure, sunt. Consequuntur omnis
                  odit minima maiores atque dicta voluptatibus?
                </p>
              </div>
              <img
                src={musiciens[0]?.musiciens.photo}
                alt="Laurent"
                className="w-[300px] sm:min-w-[300px] sm:max-h-[500px] mx-auto rounded object-cover"
              />
            </div> */}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Musiciens;
