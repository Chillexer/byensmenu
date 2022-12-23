import React from "react";
import logo from "./logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import "./App.css";

function App() {
	return (
		<div className="bg-grey-200">
			<header className="h-20 shadow-lg px-4 md:px-24 lg:px-48 xl:px-96 flex items-center justify-between text-3xl">
				<p className="font-semibold">Menu</p>
				<img className="h-14" alt="logo" src={logo} />
			</header>

			<section className="px-4 md:px-24 lg:px-48 xl:px-96 mt-8">
				<h1 className="font-medium text-2xl text-red-600 mb-5">Pizza indbagt</h1>

				<div className="flex flex-col gap-5">
					<div className="border-gray-400 border rounded-xl w-full justify-between flex bg-white py-4 px-4 card">
						<div>
							<h1 className="text-lg font-bold row-start-1">1. Bolognaise</h1>
							<p className="text-gray-700 font-thin row-start-2">
								tomatsauce, ost, kødsauce og spaghetti
							</p>
							<p className="text-lg font-bold row-start-3">79,00 kr.</p>
						</div>
						<div className="row-start-1 col-start-2 row-span-3 text-4xl">
							<AiOutlineHeart />
						</div>
					</div>

					<div className="border-gray-400 border rounded-xl w-full justify-between flex bg-white py-4 px-4 card">
						<div>
							<h1 className="text-lg font-bold row-start-1">1. Bolognaise</h1>
							<p className="text-gray-700 font-thin row-start-2">
								tomatsauce, ost, kødsauce og spaghetti
							</p>
							<p className="text-lg font-bold row-start-3">79,00 kr.</p>
						</div>
						<div className="row-start-1 col-start-2 row-span-3 text-4xl">
							<AiOutlineHeart />
						</div>
					</div>
					<div className="border-gray-400 border rounded-xl w-full justify-between flex bg-white py-4 px-4 card">
						<div>
							<h1 className="text-lg font-bold row-start-1">1. Bolognaise</h1>
							<p className="text-gray-700 font-thin row-start-2">
								tomatsauce, ost, kødsauce og spaghetti
							</p>
							<p className="text-lg font-bold row-start-3">79,00 kr.</p>
						</div>
						<div className="row-start-1 col-start-2 row-span-3 text-4xl">
							<AiOutlineHeart />
						</div>
					</div>
					<div className="border-gray-400 border rounded-xl w-full justify-between flex bg-white py-4 px-4 card">
						<div>
							<h1 className="text-lg font-bold row-start-1">1. Bolognaise</h1>
							<p className="text-gray-700 font-thin row-start-2">
								tomatsauce, ost, kødsauce og spaghetti
							</p>
							<p className="text-lg font-bold row-start-3">79,00 kr.</p>
						</div>
						<div className="row-start-1 col-start-2 row-span-3 text-4xl">
							<AiOutlineHeart />
						</div>
					</div>
				</div>
			</section>
			<section className="px-4 md:px-24 lg:px-48 xl:px-96 mt-8">
				<h1 className="font-medium text-2xl text-red-600 mb-5">Pizza indbagt</h1>
				<div className="border-gray-400 border rounded-xl w-full grid grid-rows-3 bg-white py-4 px-4 card">
					<h1 className="text-lg font-bold row-start-1">1. Bolognaise</h1>
					<p className="text-gray-700 font-thin row-start-2">
						tomatsauce, ost, kødsauce og spaghetti
					</p>
					<p className="text-lg font-bold row-start-3">79,00 kr.</p>
					<div className="row-start-1 col-start-2 row-span-3 text-4xl">
						<AiOutlineHeart />
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
