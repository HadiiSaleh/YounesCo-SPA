import { OrderItem } from './OrderItem';
import { Product } from './Product';
import { Image } from './Image';

export interface Color {
  colorId: number;
  // product: Product;
  colorName: string;
  colorCode: string;
  deleted: boolean;
  default?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  images?: Image[];
  orderItems?: OrderItem[];
}
