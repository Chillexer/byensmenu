import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
	return (
		<div className="bg-grey-200">
			<Navbar />

			<Section />

			<Section />
		</div>
	);
}

export default App;
