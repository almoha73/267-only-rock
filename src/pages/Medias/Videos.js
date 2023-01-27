import React from "react";
import Navbar from "../../components/Navbar";
import Teaser from "../../components/Teaser";
import bg from "../../assets/bg_2.jpg";

const Videos = () => {
  return (
    <div className="h-screen w-full" style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <main className="flex justify-center items-center flex-col gap-16 mb-32 w-11/12 mx-auto h-full">
        <h1 className="teaserTitle text-red-600 text-2xl sm:text-4xl">
          Teaser
        </h1>
        <Teaser />
      </main>
    </div>
  );
};

export default Videos;
