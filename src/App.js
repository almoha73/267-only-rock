import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import Groupe from "./pages/Groupe";
import Musiciens from "./pages/Musiciens";
import Evenements from "./pages/Evenements";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
//import Photos from "./pages/Medias/Photos";
import Videos from "./pages/Medias/Videos";

const Home = lazy(() => import("./pages/Home"));
const Groupe = lazy(() => import("./pages/Groupe"));
const Photos = lazy(() => import("./pages/Medias/Photos"));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div className="text-white">Loading ...</div>}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/homeboard" element={<Groupe />}></Route>
					<Route path="/musiciens" element={<Musiciens />}></Route>
					<Route path="/evenements" element={<Evenements />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
					<Route path="/photos" element={<Photos />}></Route>
					<Route path="/videos" element={<Videos />}></Route>
					<Route path="*" element={<Error />}></Route>
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
