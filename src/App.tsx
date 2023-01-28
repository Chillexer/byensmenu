import { useLiveQuery } from "dexie-react-hooks";
import { RecoilRoot } from "recoil";
import "./App.css";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import Search from "./components/Search";
import SliderWrapper from "./components/Slider";
import { db } from "./data/db";

function App() {
	const categories = useLiveQuery(async () => {
		await db.initialize();
		return await db.categories.toArray();
	});

	if (categories)
		return (
			<div className="bg-gray-50">
				<RecoilRoot>
					<Navbar />
					<SliderWrapper />
					<Info />
					<Search categories={categories} />

					<div className="flex flex-col items-center px-4 md:px-24 lg:px-48 max-w-none xl:px-56">
						<Scroller categories={categories} />
					</div>
				</RecoilRoot>
			</div>
		);
	return <></>;
}

export default App;
