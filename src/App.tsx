import { useLiveQuery } from "dexie-react-hooks";
import { useState } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import Search from "./components/Search";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(async () => {
		await db.initialize();
		return await db.categories.toArray();
	});

	const [section, setSection] = useState(0);

	if (categories)
		return (
			<div className="bg-gray-50">
				<RecoilRoot>
					<Navbar />
					<Search categories={categories} />

					<Scroller categories={categories} setSection={setSection} />
				</RecoilRoot>
			</div>
		);
	return <></>;
}

export default App;
