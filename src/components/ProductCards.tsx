import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../data/db";
import Card from "./Card";

type Props = {
	categoryId: number;
};

export default function ProductCards({ categoryId }: Props) {
	const products = useLiveQuery(() => db.products.where("categoryId").equals(categoryId).toArray());

	return (
		<div className="flex flex-col gap-5">
			{products?.map((product) => (
				<Card product={product} key={product.number} />
			))}
		</div>
	);
}
