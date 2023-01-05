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
    initialized: boolean = false

    public async initialize() {
        if (this.initialized)
            return;
        this.initialized = true
        var count = await this.products.count()

        if (count !== data.products.length) {
            await this.products.each(product => {
                for (let index = 0; index < data.products.length; index++) {
                    if (data.products[index].id === product.id) {
                        (data.products[index] as Product).isFavorite = product.isFavorite;
                        if (product.isFavorite)
                            console.log(data.products[index])
                    }
                }
            })
            await this.products.clear()
            await this.categories.clear()

            await this.products.bulkAdd(data.products as Product[]);
            await this.categories.bulkAdd(data.categories);
        }
    }

    constructor() {
        super('byenspizza');
        this.version(1).stores({
            products: '++id, number, title, subtitle, categoryId, isFavorite', // Primary key and indexed props
            categories: "++id, name",
        });
    }
}

export const db = new MenuDB();