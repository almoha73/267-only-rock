import React, { useEffect } from "react";
import bg from "../../assets/bg_2.jpg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { getGallery } from "../../utils/fetchPhotos";
import { useState } from "react";

const Photos = () => {
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = (i) => {
    if(window.innerWidth > 650){
    setIndex(i);
    setShowOverlay(true);
    }
  };

  const handleClose = () => {
    setShowOverlay(false);
  };

  const handlePrevious = () => {
    setIndex((index + gallery.length - 1) % gallery.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowOverlay(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showOverlay]);

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
  }, [gallery.length]);

  console.log(gallery);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <div
        className="flex flex-col w-Full h-auto "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <main className="flex-1 w-full flex flex-col items-center justify-center sm:mt-40 mt-32 overflow-hidden">
          <h1 className="galleryTitle text-4xl text-red-600 underline mb-12">
            Gallerie photos
          </h1>

          <div className=" sm:w-10/12 flex justify-center bg-neutral-800 sm:py-16 p-4 z-10">
            <div className="sm:ml-1/12 sm:columns-2 lg:columns-3 xl:columns-4 sm:gap-8">
              {gallery &&
                gallery.map((image, i) => (
                  <img
                    key={i}
                    src={image.gallery.photo}
                    alt={image.alt}
                    className="w-full  sm:w-80 mb-8 rounded-lg shadow-md shadow-white cursor-pointer"
                    onClick={() => handleClick(i)}
                  />
                ))}
              {showOverlay && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-100">
                  <button
                    className="absolute top-1/2 left-20 mt-4 ml-4 cursor-pointer"
                    onClick={handlePrevious}
                  >
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="text-white text-4xl"
                    />
                  </button>
                  <button
                    className="absolute top-1/2 right-20 mt-4 mr-4 cursor-pointer"
                    onClick={handleNext}
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="text-white text-4xl"
                    />
                  </button>
                  <button
                      className="absolute top-24 right-20 mt-4 mr-4 cursor-pointer"
                      onClick={handleClose}
                    >
                      <FontAwesomeIcon icon={faTimes} className="text-white text-4xl" />
                    </button>
                  <div className="modal max-h-[700px]" style={modalStyle}>
                    <img
                      src={gallery[index].gallery.photo}
                      alt={gallery[index].alt}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Photos;
