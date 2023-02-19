import React from "react";
import "./Error.css";

const Error = () => {
  return (
    <div className="neon bg-black h-screen w-full flex items-center justify-center flex-col gap-8">
      <h1 className="neon-box neon-title mb-4" data-text="ERREUR 404">
        ERREUR 404
      </h1>
      <h2
        className="neon-box neon-title2"
        data-text="Désolé, on a joué trop fort,"
      >
        {" "}
        Désolé, on a joué trop fort, 
      </h2>
	  <h2 className="neon-box neon-title3" data-text="la page est devenue sourde !">
	  la page est devenue sourde !
	  </h2>

      <button className="btn-error text-[#FFDFDE] mt-8 xl:mt-16">
        <a
          href="/homeboard"
          className=" border-solid	border-2 border-red-500  text-xl tracking-widest bg-transparent p-3 rounded-lg "
        >
          Retour à l'accueil
        </a>
      </button>
    </div>
  );
};

export default Error;
