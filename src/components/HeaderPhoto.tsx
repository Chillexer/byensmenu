import React from "react";
import mand from "../images/mand.jpeg";
type Props = {};

export default function HeaderPhoto({}: Props) {
	return (
		<div className="w-full overflow-hidden bg-white">
			<img
				className="object-cover object-center w-full h-40 md:object-top md:h-60"
				src={mand}
				alt="pizza mand"
			/>
		</div>
	);
}
