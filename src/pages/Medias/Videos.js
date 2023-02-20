import React from "react";
import Navbar from "../../components/Navbar";
import Teaser from "../../components/Teaser";
import bg from "../../assets/bg_2.jpg";

const Videos = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <main className="flex flex-1 items-center flex-col justify-start w-11/12 sm:w-8/12 gap-8 mt-24 sm:mt-8 xl:w-6/12 h-full">
        <h1 className="teaserTitle text-red-600 text-2xl sm:my-28 sm:text-4xl">
          Teaser
        </h1>
        <Teaser />
        {/* <audio controls>
          <source src="https://firebasestorage.googleapis.com/v0/b/only-rock-2c114.appspot.com/o/mp3%2FT%C3%A9l%C3%A9phone%20-%20Argent%20Trop%20Cher.mp3?alt=media&token=890ecf65-d063-4eac-85d9-8a8747f17f69" type="audio/mpeg" />
        </audio> */}
      </main>
    </div>
  );
};

export default Videos;
