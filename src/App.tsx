import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(() => db.categories.toArray());
	const [search, setSearch] = useState("");
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		async function initialize() {
			await db.initialize();
			setInitialized(true);
		}

		initialize();
	}, []);

	if (initialized)
		return (
			<div className="bg-grey-200">
				<Navbar />

				<input type="text" onChange={(e) => setSearch(e.target.value)}></input>

				{categories?.map((category) => (
					<Section search={search} category={category} key={category.id} />
				))}
			</div>
		);
	return <></>;
}

export default App;
