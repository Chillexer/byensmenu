import Product from "../Models/Product";
import Card from "./Card";

type Props = {
	products: Product[];
	imageSrc: string;
};

export default function ProductCards({ products, imageSrc }: Props) {
	return (
		<div className="flex flex-col overflow-hidden rounded-md">
			<img
				src={process.env.PUBLIC_URL + imageSrc}
				className="object-cover object-center h-40 md:h-60"
				alt="pizza"
			/>
			<div className="xl:grid xl:grid-cols-2">
				{products?.map((product, index) => (
					<Card product={product} index={index} count={products.length} key={product.id} />
				))}
			</div>
		</div>
	);
}
