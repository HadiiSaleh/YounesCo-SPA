import { Product } from "./Product";
import { Order } from "./Order";
import { Color } from "./Color";

export interface OrderItem {
    orderItemId: number;
    productId: number;
    product: Product;
    order: Order;
    orderId: number;
    quantity: number;
    colorName: string;
    unitPrice: number;
    totalPrice: number;
    colorId: number;
    color: Color;
}