import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import Groupe from "./pages/Groupe";
//import Musiciens from "./pages/Musiciens";
//import Evenements from "./pages/Evenements";
//import Contact from "./pages/Contact";
//import Error from "./pages/Error";
import Spinner from "./components/Spinner";
// import LogoSvg from "./assets/LogoSvg";

const Home = lazy(() => import("./pages/Home"));
const Groupe = lazy(() => import("./pages/Groupe"));
const Photos = lazy(() => import("./pages/Medias/Photos"));
const Videos = lazy(() => import("./pages/Medias/Videos"));
const Audios = lazy(() => import("./pages/Medias/Audios"));
const Musiciens = lazy(() => import("./pages/Musiciens"));
const Evenements = lazy(() => import("./pages/Evenements"));
const Contact = lazy(() => import("./pages/Contact"));
//const Error = lazy(() => import("./pages/Error/Error"));
const Erreur = lazy(() => import("./pages/Error/Erreur"));
//const Spinner = lazy(() => import("./pages/Musiciens"));




function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/homeboard" element={<Groupe />}></Route>
          <Route path="/musiciens" element={<Musiciens />}></Route>
          <Route path="/evenements" element={<Evenements />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/audios" element={<Audios />}></Route>
          {/* <Route path="*" element={<Error />}></Route> */}
          <Route path="*" element={<Erreur />}></Route>
          {/* <Route path="essai" element={<LogoSvg />}></Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
