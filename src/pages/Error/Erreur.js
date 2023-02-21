import React from "react";
import "./Erreur.css";

const Erreur = () => {
  return (
    <main>
      <div className="logo">
        <b>
          <span>ERREUR 404</span> <br />{" "}
          <span>
            Désolé, on a joué trop fort ! <br />{" "}
          </span>{" "}
          <span>La page est devenue sourde</span>{" "}
        </b>
      </div>
    </main>
  );
};

export default Erreur;
