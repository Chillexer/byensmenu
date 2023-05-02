import React from "react";
import { AiOutlineClockCircle, AiOutlinePhone } from "react-icons/ai";
import { FaDirections } from "react-icons/fa";
import Popup from "reactjs-popup";
import { useRecoilState } from "recoil";
import { isPopupOpenAtom } from "../atoms/PopupAtom";
import GoogleMaps from "./GoogleMaps";
import PopupInfo from "./PopupInfo";

const opendays = {
	everyday: "11:00 - 22:00",
	sunday: "12:00 - 22:00",
};

function Info() {
	const [isPopupOpen, setIsPopupOpen] = useRecoilState(isPopupOpenAtom);
	const handleOpenPopup = () => {
		const body = document.querySelector("body");
		if (body) body.style.overflow = "hidden";
		setIsPopupOpen(true);
	};

	const getDay = () => {
		var date = new Date(Date.now());
		if (
			(date.getDay() === 0 && date.getHours() < 22) ||
			(date.getDay() === 6 && date.getHours() >= 22)
		)
			return opendays.sunday;
		else return opendays.everyday;
	};

	const handleClosePopup = () => {
		const body = document.querySelector("body");
		if (body) body.style.overflow = "auto";
		setIsPopupOpen(false);
	};
	return (
		<>
			<header className="flex justify-center px-4 text-xl bg-white md:text-3xl sm:text-2xl md:px-24 lg:px-48 xl:px-56">
				<div className="grid w-full max-w-2xl gap-3 py-2 infobar xl:max-w-4xl">
					<div className="flex items-center h-10 gap-3 px-2 text-sm border rounded-md">
						<AiOutlineClockCircle className="w-6 h-6" />
						{"Åben " + getDay()}
					</div>
					<div></div>
					<a href="tel:+4548793886">
						<AiOutlinePhone className="w-10 h-10 p-1 bg-gray-100 rounded-full hover:bg-gray-200 text-Black" />
					</a>
					<FaDirections
						onClick={() => setIsPopupOpen(true)}
						className="w-10 h-10 p-1 bg-gray-100 rounded-full hover:bg-gray-200 text-Black"
					/>
				</div>
			</header>
			<Popup
				open={isPopupOpen}
				className=""
				position="top center"
				onClose={() => handleClosePopup()}
				onOpen={() => handleOpenPopup()}>
				<div className="popup-content-container">
					<PopupInfo />
					<div className="googlemaps">
						<GoogleMaps />
					</div>
					<div className="footer">
						<button
							className="px-4 py-2 text-white bg-black border rounded-lg"
							onClick={() => setIsPopupOpen(false)}>
							Luk
						</button>
					</div>
				</div>
			</Popup>
		</>
	);
}

export default Info;
