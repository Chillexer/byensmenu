// db.ts
import Dexie, { Table } from 'dexie';
import Category from '../Models/Category';
import Product from '../Models/Product';
import Version from '../Models/Version';
import data from "./menu.json";

export class MenuDB extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    versions!: Table<Version>
    products!: Table<Product>;
    categories!: Table<Category>;
    initialized: boolean = false;
    initializing: boolean = false;

    public async initialize() {
        if (this.initialized || this.initializing)
            return
        this.initializing = true
        var count = await this.products.count()
        var newestVersion = await this.versions.orderBy("version").reverse().first();

        if (count !== data.products.length || (newestVersion?.version && newestVersion.version < data.version) || !newestVersion) {
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
            await this.versions.add({ version: data.version } as Version)
        }

        this.initializing = false
        this.initialized = true
    }

    constructor() {
        super('byenspizza');
        this.version(data.version).stores({
            products: '++id, number, title, subtitle, categoryId, isFavorite', // Primary key and indexed props
            categories: "++id, name",
            versions: "++id, version"
        });
    }
}

export const db = new MenuDB();