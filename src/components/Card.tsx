import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { db } from "../data/db";
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
	const handleToggleLike = () => {
		db.products.get({ id: product.id }).then((p) => {
			db.products.update(product, { isFavorite: !product.isFavorite });
		});
	};

	return (
		<div className="flex justify-between w-full px-4 py-4 bg-white border border-gray-400 rounded-xl card">
			<div>
				{product.title !== "" && (
					<h1 className="row-start-1 text-lg font-bold">{`${
						product.number !== "" ? product.number + "." : ""
					} ${product.title}`}</h1>
				)}
				<p className="row-start-2  text-gray-700">{product.subtitle}</p>
				<p className="row-start-3 text-lg font-bold">
					{product.price.toLocaleString("da-dk", currencyFormat)}
				</p>
			</div>
			<div className="col-start-2 row-span-3 row-start-1 text-4xl">
				{product.isFavorite ? (
					<AiFillHeart className="text-red-500" onClick={() => handleToggleLike()} />
				) : (
					<AiOutlineHeart onClick={() => handleToggleLike()} />
				)}
			</div>
		</div>
	);
}
