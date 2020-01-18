import { OrderItem } from "./OrderItem";
import { Product } from "./Product";
import { Image } from "./Image";

export interface Color {
    colorId?: number;
    productId: number;
    product: Product;
    colorName: string;
    colorCode: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleted: boolean;
    images?: Image[];
    orderItems?: OrderItem[];
}