import logo from "../images/logo.png";

export default function Navbar() {
	const onHome = () => {
		window.location.href = "https://www.byenspizza.com/";
	};

	return (
		<header className="flex justify-center h-20 px-4 text-xl bg-white md:text-3xl sm:text-2xl md:px-24 lg:px-48 xl:px-56">
			<div className="flex items-center justify-between w-full max-w-2xl xl:max-w-4xl">
				<p onClick={() => onHome()} className="font-semibold cursor-pointer">
					Byens Pizzeria og Cafè
				</p>
				<img onClick={() => onHome()} className="cursor-pointer h-14" alt="logo" src={logo} />
			</div>
		</header>
	);
}
