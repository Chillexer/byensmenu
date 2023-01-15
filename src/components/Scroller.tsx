import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { MutableRefObject, useEffect } from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { closestCategoryAtom } from "../atoms/SearchAtom";
import Category from "../Models/Category";
import Section from "./Section";

export default function Scroller({
	setSection, //this is the mutator method we set earlier
	categories,
}: {
	setSection: (section: number) => void;
	categories: Category[];
}) {
	function SectionPositionHook({
		sectionRef,
		sectionIndex,
	}: {
		sectionRef: MutableRefObject<HTMLElement>;
		sectionIndex: number;
	}) {
		const [closestCategory, setClosestCategory] = useRecoilState(closestCategoryAtom);
		useEffect(() => {
			if (closestCategory.isScrolling && closestCategory.closestCategory === sectionIndex) {
				window.scrollTo({ behavior: "auto", left: 0, top: sectionRef.current.offsetTop - 60 });
				var temp = { ...closestCategory };
				temp.isScrolling = false;
				setClosestCategory(temp);
				return;
			}
		}, [closestCategory, sectionIndex, sectionRef, setClosestCategory]);

		useScrollPosition(
			({ prevPos, currPos }) => {
				if (closestCategory.isScrolling) return;

				let offsetTop = sectionRef.current?.offsetTop - 80;
				let offsetBottom = sectionRef.current?.clientHeight + sectionRef.current?.offsetTop - 80;

				if (currPos.y > offsetTop && currPos.y < offsetBottom) {
					var temp = { ...closestCategory };
					temp.closestCategory = sectionIndex;
					setClosestCategory(temp);
				}
			},
			[],
			sectionRef, //the element we are tracking
			true, //if we are using the window to track (which we're not)
			50 //throttling of the hook (in ms), to consume less resources
		);
	}
	return (
		<>
			{categories.map((category) => {
				//for each child component...
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const sectionRef: MutableRefObject<any> = useRef(null); // create a ref to this section

				let args = {
					sectionRef: sectionRef,
					sectionIndex: category.id,
				};
				SectionPositionHook(args); //CREATE a position hook that uses the
				// args we wrote above to track
				// this section. We will write this later
				return <Section ref={sectionRef} category={category} key={category.id} />;
			})}
		</>
	);
}
