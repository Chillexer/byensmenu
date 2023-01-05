import Product from "../Models/Product";
import Card from "./Card";

type Props = {
	products: Product[];
};

export default function ProductCards({ products }: Props) {
	return (
		<div className="flex flex-col gap-5">
			{products?.map((product) => (
				<Card product={product} key={product.id} />
			))}
		</div>
	);
}
