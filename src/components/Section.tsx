import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { useRecoilState } from "recoil";
import { searchAtom } from "../atoms/SearchAtom";
import { db } from "../data/db";
import Category from "../Models/Category";
import Product from "../Models/Product";
import ProductCards from "./ProductCards";

type Props = {
	category: Category;
};

export default function Section({ category }: Props) {
	const [search] = useRecoilState(searchAtom);
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
				<div className="flex flex-col mb-5">
					<h1 className="text-2xl font-medium text-red-600">{category.title}</h1>
					{category.subtitle !== "" && <p className="text-lg text-black">{category.subtitle}</p>}
				</div>

				{products && <ProductCards products={products} />}
			</section>
		);
	return <></>;
}
