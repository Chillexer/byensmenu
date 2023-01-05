export default interface Product {
    id?: number;
    number?: string;
    title: string;
    subtitle: string;
    price: number;
    categoryId?: number;
    isFavorite: boolean;
    isExtra?: boolean;
}