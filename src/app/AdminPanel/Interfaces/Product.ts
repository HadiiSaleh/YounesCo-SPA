import { Category } from "./Category";
import { Color } from "./Color";
import { OrderItem } from "./OrderItem";
import { Favorite } from "./Favorite";

export interface Product {
    productId?: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    categoryId: number;
    category: Category;
    createdAt?: Date;
    updatedAt?: Date;
    outOfStock: boolean;
    colors: Color[];
    orderItems: OrderItem[];
    favorites: Favorite[];
}