import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { searchAtom } from "../atoms/SearchAtom";

type Props = {};

const Search = (props: Props) => {
	const [, setSearch] = useRecoilState(searchAtom);
	const [searchOffset, setSearchOffset] = useState(0);
	const [offset, setOffset] = useState(0);
	const [searchToggled, setSearchToggled] = useState(false);
	const searchInput = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setSearchOffset(node.offsetTop);
		}
	}, []);
	const onScroll = () => {
		setOffset(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className={`bg-white w-full flex items-center shadow-lg justify-between py-1 px-4 md:px-24 lg:px-48 xl:px-96 ${
				offset > searchOffset ? "fixed top-0" : ""
			}`}
			ref={searchInput}>
			<div className="flex w-full px-2 py-1 border border-gray-400 rounded-lg focus:border-gray-700">
				<AiOutlineSearch
					onClick={() => setSearchToggled(true)}
					className="w-10 h-10 p-[4px] rounded-full cursor-pointer focus:border-none hover:bg-gray-200  bg-gray-100 text-black"></AiOutlineSearch>
				{searchToggled && (
					<input
						className="w-full h-10 px-4 py-2 rounded-3xl focus:border-none"
						type="text"
						placeholder="Søg"
						onChange={(e) => setSearch(e.target.value)}></input>
				)}
			</div>
		</div>
	);
};

export default Search;
