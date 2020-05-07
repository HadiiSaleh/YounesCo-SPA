import { Product } from './Product';

export interface OrderItem {
  orderItemId?: number;
  productId?: number;
  product?: Product;
  orderId?: number;
  quantity?: number;
  colorName?: string;
  unitPrice?: number;
  totalPrice?: number;
}
