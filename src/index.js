import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ImageContextProvider } from "./context/imagesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ImageContextProvider>
			<App />
		</ImageContextProvider>
	</BrowserRouter>
);
