import { User } from "./User";
import { Product } from "./Product";

export interface Favorite {
    productId: number;
    product: Product;
    customerId: string;
    customer: User;
    createdAt?: Date;
}