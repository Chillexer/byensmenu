// db.ts
import Dexie, { Table } from 'dexie';
import Category from '../Models/Category';
import Product from '../Models/Product';
import data from "./menu.json";

export class MenuDB extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    products!: Table<Product>;
    categories!: Table<Category>;

    constructor() {
        super('byenspizza');
        this.version(1).stores({
            products: '++id, number, title, subtitle, categoryId, isFavorite', // Primary key and indexed props
            categories: "id, name"
        });

        this.products.each(product => {
            for (let index = 0; index < data.products.length; index++) {
                if (data.products[index].number === product.number)
                    (data.products[index] as Product).isFavorite = product.isFavorite;
            }
        })

        this.products.clear()
        this.categories.clear()

        this.categories.bulkAdd(data.categories);
        this.products.bulkAdd(data.products as Product[]);
    }
}

export const db = new MenuDB();