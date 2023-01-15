import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { closestCategoryAtom, searchAtom } from "../atoms/SearchAtom";
import Category from "../Models/Category";

type Props = {
	categories: Category[];
};

const Search = ({ categories }: Props) => {
	const [, setSearch] = useRecoilState(searchAtom);
	const [closestCategory, setClosestCategory] = useRecoilState(closestCategoryAtom);
	const [searchOffset, setSearchOffset] = useState(0);
	const [offset, setOffset] = useState(0);
	const [searchToggled, setSearchToggled] = useState(false);
	const horizontalScroll: MutableRefObject<any> = useRef();
	const closestCategoryRef: MutableRefObject<any> = useRef(null);
	const searchInput = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setSearchOffset(node.offsetTop);
		}
	}, []);
	const onScroll = () => {
		setOffset(window.scrollY);
	};

	useEffect(() => {
		if (searchToggled) return;
		if (!closestCategoryRef) return;

		horizontalScroll.current?.scrollTo({
			top: 0,
			left: closestCategoryRef.current?.offsetLeft - horizontalScroll.current?.offsetLeft,
			behavior: "smooth",
		});
	}, [closestCategory, searchToggled]);

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
			<div
				className={`grid w-full px-2 py-1 items-center searchbar ${
					searchToggled
						? "border border-gray-400 rounded-lg focus-within:border-black hover:bg-gray-100"
						: ""
				}`}>
				<label htmlFor="search">
					<AiOutlineSearch
						onClick={() => setSearchToggled(true)}
						className={`w-10 h-10 p-[4px] rounded-full text-black ${
							searchToggled ? "cursor-text" : "hover:bg-gray-200  bg-gray-100 cursor-pointer"
						}`}></AiOutlineSearch>
				</label>
				{searchToggled ? (
					<>
						<input
							id="search"
							className="w-full h-10 px-1 py-2 rounded-3xl focus:outline-none bg-transparent"
							type="text"
							placeholder="Søg"
							onChange={(e) => setSearch(e.target.value)}></input>
						<AiOutlineClose
							onClick={() => setSearchToggled(false)}
							className="w-8 h-8 p-[4px] rounded-full cursor-pointer text-black border-2 border-black"
						/>
					</>
				) : (
					<div
						className="flex overflow-y-auto flex-nowrap gap-1 scrollbar-hide"
						ref={horizontalScroll}>
						{categories.map((category) => (
							<div
								ref={closestCategory.closestCategory === category.id ? closestCategoryRef : null}
								className={`flex h-10 px-4 items-center whitespace-nowrap rounded-full ${
									closestCategory.closestCategory === category.id
										? "bg-black text-white"
										: "text-black"
								}`}
								onClick={() => {
									var temp = { ...closestCategory };
									temp.closestCategory = category.id;
									temp.isScrolling = true;
									setClosestCategory(temp);
								}}
								key={category.id}>
								{category.title}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;
