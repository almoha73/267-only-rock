import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/267_sans_fond.png";
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
        className="w-screen h-screen  flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <main
          className="w-full  space-y-16 md:space-y-8 flex-1 flex items-center justify-between flex-col"
          style={{ perspective: 500 }}
        >
          <div className="w-10/12 md:w-6/12 lg:w-6/12 xl:w-4/12">
            <img
              src={logo}
              ref={(el) => (bomb = el)}
              alt=""
              style={{ transformStyle: "preserve-3d", objectPosition: "" }}
              className="w-full"
            />
          </div>
          <button className="btn-home ">
          <a
            href="/homeboard"
            className="border-solid	border-2 border-red-500 text-white md:text-3xl tracking-widest bg-transparent p-3 rounded-lg "
          >
            ENTRÉE
          </a>
        </button>
        </main>
        
      </div>
    </>
  );
};

export default Home;
