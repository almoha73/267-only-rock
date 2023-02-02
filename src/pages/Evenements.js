import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getEvenements } from "../utils/fetchPhotos";
import bg from "../assets/bg_2.jpg";

const Evenements = () => {
  const [evenements, setEvenements] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result2 = [];
      const data2 = await getEvenements();
      await data2.forEach((query) =>
        result2.push({ key: query.id, evenement: query.data() })
      );
      setEvenements(result2);
    };
    loadData();
  }, [evenements.length]);

  console.log(evenements);

  return (
    <>
      <div
        className="w-full h-screen flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <main className="flex-1 h-auto  flex  flex-col w-full mt-24 sm:mt-32 justify-center items-center">
          <h1 className="evenementTitle text-4xl text-red-600 underline mb-12">Evènements</h1>
          <div className="h-auto mb-20">
            {evenements.map((elt) => (
              <img src={elt.evenement.href} alt="evenement" className="w-full max-h-[600px]"/>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Evenements;
