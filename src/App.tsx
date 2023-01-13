import { useLiveQuery } from "dexie-react-hooks";
import { RecoilRoot } from "recoil";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Section from "./components/Section";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(async () => {
		await db.initialize();
		return await db.categories.toArray();
	});

	return (
		<div className="bg-gray-50">
			<RecoilRoot>
				<Navbar />
				<Search />

				{categories?.map((category) => (
					<Section category={category} key={category.id} />
				))}
			</RecoilRoot>
		</div>
	);
}

export default App;
