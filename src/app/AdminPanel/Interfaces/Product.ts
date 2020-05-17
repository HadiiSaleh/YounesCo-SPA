import { Category } from './Category';
import { Color } from './Color';
import { OrderItem } from './OrderItem';
import { Image } from './Image';
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
  features: string;
  deleted?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
  color?: Color;
  images?: Image[];
  orderItems?: OrderItem[];
  favorites?: Favorite[];
}
