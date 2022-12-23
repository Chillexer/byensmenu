import React from "react";
import Card from "./Card";

type Props = {};

export default function ProductCards({}: Props) {
	return (
		<div className="flex flex-col gap-5">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}
