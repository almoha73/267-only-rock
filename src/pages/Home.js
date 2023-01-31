import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import logosansFond from "../assets/logosansFond.svg";
import bg from "../assets/bg_2.jpg";

const Home = () => {
  let bomb = useRef(null);

  useEffect(() => {
    gsap.to(bomb, {
      rotationY: -360,
      duration: 0.5,
      transformOrigin: "50% 50%",
      ease: "none",
    });
  }, []);

  return (
    <>
      <div
        className="w-full h-screen  flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="mb-20 max-w-[700px]">
          <img
            src={logosansFond}
            ref={(el) => (bomb = el)}
            alt=""
            className=""
          />
        </div>
        <button className="btn-home ">
          <a
            href="/homeboard"
            className="border-solid	border-2 border-red-500 text-white text-3xl tracking-widest bg-transparent p-3 rounded-lg "
          >
            ENTRÉE
          </a>
        </button>
      </div>
    </>
  );
};

export default Home;
