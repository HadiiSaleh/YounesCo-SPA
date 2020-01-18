import { Product } from "./Product";

export interface Category {
    categoryId?: number;
    categoryName: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted: boolean;
    products?: Product[];
}