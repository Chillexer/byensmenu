import { useLiveQuery } from "dexie-react-hooks";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(() => db.categories.toArray());
	const [search, setSearch] = useState("");
	const [initialized, setInitialized] = useState(false);
	const [searchOffset, setSearchOffset] = useState(0);
	const [offset, setOffset] = useState(0);
	const searchInput = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setSearchOffset(node.offsetTop);
		}
	}, []);

	useEffect(() => {
		async function initialize() {
			await db.initialize();
			setInitialized(true);
		}

		initialize();

		const onScroll = () => {
			setOffset(window.scrollY);
		};
		window.removeEventListener("scroll", onScroll);
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (initialized)
		return (
			<div className="bg-grey-200">
				<Navbar />
				<div
					className={`bg-white w-full flex items-center shadow-lg justify-between h-20 px-4 md:px-24 lg:px-48 xl:px-96 ${
						offset > searchOffset ? "fixed top-0" : ""
					}`}
					ref={searchInput}>
					<input
						className="w-full border border-gray-400 focus:border-gray-700 rounded-xl px-4 py-2"
						type="text"
						placeholder="Søg"
						onChange={(e) => setSearch(e.target.value)}></input>
				</div>

				{categories?.map((category) => (
					<Section search={search} category={category} key={category.id} />
				))}
			</div>
		);
	return <></>;
}

export default App;
