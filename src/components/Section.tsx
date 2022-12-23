import React from "react";
import ProductCards from "./ProductCards";

type Props = {};

export default function Section({}: Props) {
	return (
		<section className="px-4 mt-8 md:px-24 lg:px-48 xl:px-96">
			<h1 className="mb-5 text-2xl font-medium text-red-600">Pizza indbagt</h1>

			<ProductCards />
		</section>
	);
}
