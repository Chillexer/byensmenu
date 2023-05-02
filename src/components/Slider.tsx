import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import græskBøf from "../images/graesk-boef.jpeg";
import indbagtPizza from "../images/indbagt-pizza.jpeg";
import italienskPizza from "../images/italiensk-pizza.jpeg";
import mand from "../images/mand.jpeg";
import menu from "../images/menu.jpeg";
import nachos from "../images/nachos.jpeg";
import ørbySpecial from "../images/oerby-special.jpeg";
import pasta from "../images/pasta.jpeg";
import pitaKebab from "../images/pita-kebab.jpeg";
import pizzaBørn from "../images/pizza-boern.jpeg";
import pizzaBolognaise from "../images/pizza-bolognaise.jpeg";
import pizzaChili from "../images/pizza-chili.jpeg";
import pizzaKylling from "../images/pizza-kylling.jpeg";
import pizzaPepperoni from "../images/pizza-pepperoni.jpeg";
import salat from "../images/salat.jpeg";

function SliderWrapper() {
	const [settings, setSettings] = useState({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 5 : 4) : 3,
		slidesToScroll: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 5 : 4) : 3,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
	});

	const handleOnResize = () => {
		setSettings({
			...settings,
			slidesToShow: window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 5 : 4) : 3,
			slidesToScroll:
				window.window.innerWidth > 600 ? (window.window.innerWidth > 1000 ? 5 : 4) : 3,
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
				<img className="object-cover w-full h-40 md:h-60" alt="græsk bøf" src={græskBøf} />
				<img className="object-cover w-full h-40 md:h-60" alt="indbagt pizza" src={indbagtPizza} />
				<img
					className="object-cover w-full h-40 md:h-60"
					alt="italiensk pizza"
					src={italienskPizza}
				/>
				<img
					className="object-cover object-center w-full h-40 md:object-top md:h-60"
					src={mand}
					alt="pizza mand"
				/>
				<img className="object-cover w-full h-40 md:h-60" alt="menu" src={menu} />
				<img className="object-cover w-full h-40 md:h-60" alt="nachos" src={nachos} />
				<img className="object-cover w-full h-40 md:h-60" alt="ørby special" src={ørbySpecial} />
				<img className="object-cover w-full h-40 md:h-60" alt="pasta" src={pasta} />
				<img className="object-cover w-full h-40 md:h-60" alt="pita kebab" src={pitaKebab} />
				<img className="object-cover w-full h-40 md:h-60" alt="pizza børn" src={pizzaBørn} />
				<img
					className="object-cover w-full h-40 md:h-60"
					alt="pizza bolognaise"
					src={pizzaBolognaise}
				/>
				<img className="object-cover w-full h-40 md:h-60" alt="pizza chili" src={pizzaChili} />
				<img className="object-cover w-full h-40 md:h-60" alt="pizza kylling" src={pizzaKylling} />
				<img
					className="object-cover w-full h-40 md:h-60"
					alt="pizza pepperoni"
					src={pizzaPepperoni}
				/>
				<img className="object-cover w-full h-40 md:h-60" alt="salat" src={salat} />
			</Slider>
		</div>
	);
}

export default SliderWrapper;
