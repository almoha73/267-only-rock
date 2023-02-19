import React from "react";
import Navbar from "../../components/Navbar";
import Teaser from "../../components/Teaser";
import bg from "../../assets/bg_2.jpg";

const Videos = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <main className="flex flex-1 items-center flex-col justify-start w-11/12 sm:w-8/12 gap-8 mt-24 sm:mt-8 xl:w-6/12 h-full">
        <h1 className="teaserTitle text-red-600 text-2xl sm:my-28 sm:text-4xl">
          Teaser
        </h1>
        <Teaser />
      </main>
    </div>
  );
};

export default Videos;
