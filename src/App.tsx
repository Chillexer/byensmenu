import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(() => db.categories.toArray());

	return (
		<div className="bg-grey-200">
			<Navbar />

			{categories?.map((category) => (
				<Section category={category} key={category.id} />
			))}
		</div>
	);
}

export default App;
