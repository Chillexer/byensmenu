import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import React, { MutableRefObject } from "react";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { closestCategoryAtom } from "../atoms/SearchAtom";
import Category from "../Models/Category";
import Section from "./Section";

function SectionPositionHook({
	sectionRef,
	sectionIndex,
}: {
	sectionRef: MutableRefObject<HTMLElement>;
	sectionIndex: number;
}) {
	const [closestCategory, setclosestCategory] = useRecoilState(closestCategoryAtom);
	useScrollPosition(
		({ prevPos, currPos }) => {
			//position is top left of the element
			//this logic fires after a scroll event and invokes the prevPos
			//and currPos provided by n8tb1t's hook

			//THIS variable represents when we want to change the section
			//I have it set to half the Scroller component height relative
			// to the viewport.
			let triggerHeight = sectionRef.current?.offsetTop - 50;

			let isTriggeredGoingDown = prevPos.y < triggerHeight && triggerHeight < currPos.y;
			let isTriggeredGoingUp = currPos.y < triggerHeight && triggerHeight < prevPos.y;

			//If the top left of the section passes the midway point while
			//scrolling down, we set the section to the current section index.
			//If it's triggered going up, we set it to previous section index
			if (isTriggeredGoingDown) {
				setclosestCategory(sectionIndex);
			} else if (isTriggeredGoingUp) {
				if (sectionIndex !== 1) setclosestCategory(sectionIndex - 1);
			}
		},
		[],
		sectionRef, //the element we are tracking
		true, //if we are using the window to track (which we're not)
		50 //throttling of the hook (in ms), to consume less resources
	);
}

export default function Scroller({
	setSection, //this is the mutator method we set earlier
	categories,
}: {
	setSection: (section: number) => void;
	categories: Category[];
}) {
	return (
		<>
			{categories.map((category) => {
				//for each child component...
				// eslint-disable-next-line react-hooks/rules-of-hooks
				const sectionRef: MutableRefObject<any> = useRef(null); // create a ref to this section

				let args = {
					//THESE args pass in refs nessecary for tracking of the section
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
