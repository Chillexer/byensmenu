import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
type Props = {};

export default function Card({}: Props) {
	return (
		<div className="flex justify-between w-full px-4 py-4 bg-white border border-gray-400 rounded-xl card">
			<div>
				<h1 className="row-start-1 text-lg font-bold">1. Bolognaise</h1>
				<p className="row-start-2 font-thin text-gray-700">
					tomatsauce, ost, kødsauce og spaghetti
				</p>
				<p className="row-start-3 text-lg font-bold">79,00 kr.</p>
			</div>
			<div className="col-start-2 row-span-3 row-start-1 text-4xl">
				<AiOutlineHeart />
			</div>
		</div>
	);
}
