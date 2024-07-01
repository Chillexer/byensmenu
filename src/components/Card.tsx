import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Product from "../Models/Product";
import { useRecoilState } from "recoil";
import { favoriteProductsAtom } from "../atoms/FavoritesAtom";
type Props = {
	product: Product;
	index: number;
	count: number;
};

const currencyFormat = new Intl.NumberFormat("da-dk", {
	style: "currency",
	currency: "DKK",
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
}).resolvedOptions();

export default function Card({ product, index, count }: Props) {
	const [favoriteProducts, setFavoriteProducts] = useRecoilState(favoriteProductsAtom);

	const { isFavorite } = favoriteProducts.find((f) => f.id === product.id) ?? {
		id: product.id,
		isFavorite: false,
	};

	const handleToggleLike = () => {
		const productItem = {
			id: product.id as number,
			isFavorite: !isFavorite,
		};

		const newList = [...favoriteProducts.filter((f) => f.id !== product.id), productItem];

		setFavoriteProducts(newList);
	};

	const calculateClasses = (): string => {
		if (index % 2 === 1) {
			if (index < count - 2) return "border-l border-r border-b xl:border-l-0";
			else if (index === count - 1)
				return "rounded-b-md border-l border-r border-b xl:border-l-0 xl:rounded-bl-none xl:rounded-br-md";
			else return "border-l border-r border-b xl:border-l-0 xl:rounded-br-md";
		} else {
			if (index < count - 2) return "border-l border-r border-b";
			else if (count % 2 === 1) return "border-l border-r border-b rounded-b-md";
			else return "border-l border-r border-b xl:rounded-bl-md";
		}
	};

	return (
		<div
			className={`${calculateClasses()} flex justify-between w-full px-4 py-4 bg-white border-gray-300 card`}>
			<div>
				{product.title !== "" && (
					<h1 className="row-start-1 text-lg font-bold">{`${
						product.number !== "" ? product.number + "." : ""
					} ${product.title}`}</h1>
				)}
				<p className="row-start-2 text-gray-700">{product.subtitle}</p>
				<p className="row-start-3 text-lg font-medium text-red-600">
					{product.price.toLocaleString("da-dk", currencyFormat)}
				</p>
			</div>
			<div className="col-start-2 row-span-3 row-start-1 text-4xl">
				{isFavorite ? (
					<AiFillHeart className="text-red-500 cursor-pointer" onClick={() => handleToggleLike()} />
				) : (
					<AiOutlineHeart
						className="text-red-500 cursor-pointer"
						onClick={() => handleToggleLike()}
					/>
				)}
			</div>
		</div>
	);
}
