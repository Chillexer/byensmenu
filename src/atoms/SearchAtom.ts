import { atom } from "recoil";

export const searchAtom = atom({
    key: "searchAtom",
    default: ""
});

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})

export const closestCategoryAtom = atom({
    key: "closestCategoryAtom",
    default: { closestCategory: 1, isScrolling: false },
})