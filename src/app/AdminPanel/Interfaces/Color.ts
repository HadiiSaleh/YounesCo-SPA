import { OrderItem } from './OrderItem';
import { Product } from './Product';

export interface Color {
  colorId: number;
  // product: Product;
  colorName: string;
  colorCode: string;
  deleted: boolean;
  default?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
