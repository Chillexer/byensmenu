import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Product from "../Models/Product";
type Props = {
	product: Product;
};

const currencyFormat = new Intl.NumberFormat("da-dk", {
	style: "currency",
	currency: "DKK",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
}).resolvedOptions();

export default function Card({ product }: Props) {
	return (
		<div className="flex justify-between w-full px-4 py-4 bg-white border border-gray-400 rounded-xl card">
			<div>
				<h1 className="row-start-1 text-lg font-bold">{`${product.number}. ${product.title}`}</h1>
				<p className="row-start-2 font-thin text-gray-700">{product.subtitle}</p>
				<p className="row-start-3 text-lg font-bold">
					{product.price.toLocaleString("da-dk", currencyFormat)}
				</p>
			</div>
			<div className="col-start-2 row-span-3 row-start-1 text-4xl">
				<AiOutlineHeart />
			</div>
		</div>
	);
}
