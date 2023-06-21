import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import personale_header from "../images/personale-2.jpg";
import personale_viser_pizza from "../images/personale-viser-pizza.png";
import personale_2 from "../images/personale-2.png";
import personale_3 from "../images/personale-3.jpg";
// import mand from "../images/mand.jpeg";
// import menu from "../images/menu.jpeg";
// import nachos from "../images/nachos.jpeg";
// import ørbySpecial from "../images/oerby-special.jpeg";
// import pasta from "../images/pasta.jpeg";
// import pitaKebab from "../images/pita-kebab.jpeg";
// import pizzaBørn from "../images/pizza-boern.jpeg";
// import pizzaBolognaise from "../images/pizza-bolognaise.jpeg";
// import pizzaChili from "../images/pizza-chili.jpeg";
// import pizzaKylling from "../images/pizza-kylling.jpeg";
// import pizzaPepperoni from "../images/pizza-pepperoni.jpeg";
// import salat from "../images/salat.jpeg";

function SliderWrapper() {
	const [settings, setSettings] = useState({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 3 : 2) : 1,
		slidesToScroll: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 3 : 2) : 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
	});

	const handleOnResize = () => {
		setSettings({
			...settings,
			slidesToShow: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 3 : 2) : 1,
			slidesToScroll:
				window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 3 : 2) : 1,
		});
	};

	useEffect(() => {
		function watchResize() {
			window.addEventListener("resize", handleOnResize);
		}
		watchResize();
		return () => {
			window.removeEventListener("resize", handleOnResize);
		};
	});
	return (
		<div className="w-full overflow-hidden bg-white">
			<Slider {...settings}>
				<img className="object-cover w-full h-40 md:h-60" alt="personale" src={personale_header} />
				<img
					className="object-cover w-full h-40 md:h-60"
					alt="personale"
					src={personale_viser_pizza}
				/>
				<img className="object-cover w-full h-40 md:h-60" alt="personale" src={personale_2} />
				<img className="object-cover w-full h-40 md:h-60" alt="personale" src={personale_3} />
			</Slider>
		</div>
	);
}

export default SliderWrapper;
