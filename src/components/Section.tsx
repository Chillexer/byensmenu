import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { db } from "../data/db";
import Category from "../Models/Category";
import Product from "../Models/Product";
import ProductCards from "./ProductCards";

type Props = {
	category: Category;
	search: string;
};

export default function Section({ category, search }: Props) {
	const products = useLiveQuery(
		() =>
			db.products
				.where("categoryId")
				.equals(category.id)
				.and(
					(x) =>
						x.title.toLowerCase().includes(search.toLowerCase()) ||
						x.subtitle.toLowerCase().includes(search.toLowerCase())
				)
				.toArray(),
		[search, category],
		[] as Product[]
	);

	if (products.length > 0)
		return (
			<section className="px-4 mt-8 md:px-24 lg:px-48 xl:px-96">
				<div className="mb-5 flex flex-col">
					<h1 className="text-2xl font-medium text-red-600">{category.title}</h1>
					{category.subtitle !== "" && <p className="text-black text-lg">{category.subtitle}</p>}
				</div>

				{products && <ProductCards products={products} />}
			</section>
		);
	return <></>;
}
