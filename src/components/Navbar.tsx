import logo from "../logo.png";

export default function Navbar() {
	return (
		<header className="flex items-center justify-between h-20 px-4 text-3xl bg-white md:px-24 lg:px-48 xl:px-96">
			<p className="font-semibold">Menu</p>
			<img className="h-14" alt="logo" src={logo} />
		</header>
	);
}
