import { Category } from './Category';
import { Color } from './Color';
import { OrderItem } from './OrderItem';
import { Favorite } from './Favorite';

export interface Product {
  productId?: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  imageUrl: string;
  defaultColor: string;
  categoryId?: number;
  outOfStock: boolean;
  deleted?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
  colors?: Color[];
  orderItems?: OrderItem[];
  favorites?: Favorite[];
}
