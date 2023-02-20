import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import bg from "../../assets/bg_2.jpg";
import { getAudios } from "../../utils/fetchPhotos";

const Audios = () => {
  const [audios, setAudios] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const result = [];
      const data = await getAudios();
      await data.forEach((query) =>
        result.push({ key: query.id, gallery: query.data() })
      );
      setAudios(result);
    };
    loadData();
  }, [audios.length]);

  console.log(audios);
  return (
    <div
      className="h-auto sm:h-screen w-full flex flex-col items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <main className="flex flex-1 items-center flex-col justify-start w-11/12 sm:w-8/12 mt-24 sm:mt-8 xl:w-6/12 h-full mb-16">
        <h1 className="teaserTitle text-red-600 text-2xl sm:mt-24 mb-8 sm:text-4xl">
          Ecoutez-nous
        </h1>
        <div className="bg-gray-800 rounded-lg flex flex-col items-start p-4">
        {audios.map((audio) => (
          <div key={audio.key} className="space-y-2 mb-8 sm:w-full ">
            <h2 className="text-white text-lg text-center">
              {audio.gallery.artiste} - {audio.gallery.titre}
            </h2>
            <audio controls>
              <source src={audio.gallery.href} type="audio/mpeg" />
            </audio>
          </div>
        ))}
        </div>
        
      </main>
    </div>
  );
};

export default Audios;
