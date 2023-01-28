import React from "react";
import { FaDirections, FaSmile } from "react-icons/fa";
import { AiOutlineClockCircle, AiOutlinePhone } from "react-icons/ai";
type Props = {};

function PopupInfo({}: Props) {
	return (
		<div className="flex flex-col ">
			<div className="flex items-center gap-4 p-2 mr-2 border-b">
				<FaDirections className="w-10 h-10 p-1 text-gray-700 bg-gray-100 rounded-full" />
				<div className="font-medium">
					<p>Vestergade 9B</p>
					<p>3200, Helsinge</p>
				</div>
			</div>
			<div className="flex items-center gap-4 p-2 mr-2 border-b">
				<AiOutlinePhone className="w-10 h-10 p-1 text-gray-700 bg-gray-100 rounded-full" />
				<a className="font-medium" href="tel:+4548793886">
					+45 48 79 38 86
				</a>
			</div>
			<div className="flex items-center gap-4 p-2 mr-2 border-b">
				<FaSmile className="w-10 h-10 p-1 text-gray-700 bg-gray-100 rounded-full" />
				<a
					className="font-medium"
					rel="noreferrer"
					target="_blank"
					href="https://www.findsmiley.dk/699142">
					Se Smiley-Rapporter
				</a>
			</div>
			<div className="flex items-center gap-4 p-2 mr-2 border-b">
				<AiOutlineClockCircle className="w-10 h-10 p-1 text-gray-700 bg-gray-100 rounded-full" />
				<div className="flex flex-col w-full font-medium">
					<div className="flex justify-between w-full">
						<p>Mandag - lørdag:</p>
						<p>11:00 - 21:00</p>
					</div>
					<div className="flex justify-between w-full">
						<p>Søndag:</p>
						<p>12:00 - 21:00</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopupInfo;
