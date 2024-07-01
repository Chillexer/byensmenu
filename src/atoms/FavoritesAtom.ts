import { atom } from "recoil";

const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: string, _: never, isReset: boolean) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};

export type Favorite = {
    id: number;
    isFavorite: boolean;
};


export const favoriteProductsAtom = atom<Favorite[]>({
    key: 'favoriteProducts',
    default: [],
    effects: [
        localStorageEffect('favoriteProducts'),
    ]
});