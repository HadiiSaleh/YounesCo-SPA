import { User } from "./User";
import { OrderItem } from "./OrderItem";

export interface Order {
    orderId?: number;
    customerId: string;
    customer: User;
    requestedOn?: Date;
    totalPrice: number;
    createdAt?: Date;
    updatedAt?: Date;
    deleted: boolean;
    orderItems?: OrderItem[];
}