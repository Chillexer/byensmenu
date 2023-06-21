import Product from "../Models/Product";
import Card from "./Card";

import børnemenu from "../images/spaghetti.jpeg";
import nachos from "../images/nachos.jpg";
import salater from "../images/kebabsalatkyllingfraiche.jpg";
import durum from "../images/durum-pommes-frites.jpg";
import pitabrød from "../images/kebab-pita.jpg";
import byensretter from "../images/kyllingpommes.jpg";
import pommes from "../images/pommes.jpg";
import ekstra from "../images/pizza-toppings.jpg";
import pizzavegetar from "../images/veganpizza.jpg";
import pizzaalm from "../images/chili-pizza.jpg";
import indbagt from "../images/indbagt-pizza.jpeg";

function getImage(source: string) {
	switch (source) {
		case "/images/indbagt-pizza.jpeg":
			return indbagt;
		case "/images/chili-pizza.jpg":
			return pizzaalm;
		case "/images/veganpizza.jpg":
			return pizzavegetar;
		case "/images/pizza-toppings.jpg":
			return ekstra;
		case "/images/pommes.jpg":
			return pommes;
		case "/images/kyllingpommes.jpg":
			return byensretter;
		case "/images/kebab-pita.jpg":
			return pitabrød;
		case "/images/durum-pommes-frites.jpg":
			return durum;
		case "/images/kebabsalatkyllingfraiche.jpg":
			return salater;
		case "/images/nachos.jpg":
			return nachos;
		case "/images/spaghetti.jpeg":
			return børnemenu;
		default:
			return pizzaalm;
	}
}

type Props = {
	products: Product[];
	imageSrc: string;
};

export default function ProductCards({ products, imageSrc }: Props) {
	return (
		<div className="flex flex-col overflow-hidden rounded-md">
			<img
				src={getImage(imageSrc)}
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
