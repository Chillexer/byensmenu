import React from "react";
import Category from "../Models/Category";
import ProductCards from "./ProductCards";

type Props = {
	category: Category;
};

export default function Section({ category }: Props) {
	return (
		<section className="px-4 mt-8 md:px-24 lg:px-48 xl:px-96">
			<h1 className="mb-5 text-2xl font-medium text-red-600">{category.name}</h1>

			<ProductCards categoryId={category.id} />
		</section>
	);
}
