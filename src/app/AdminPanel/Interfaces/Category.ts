import { Product } from './Product';

export interface Category {
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  isSelected?: boolean;
  deleted?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  products?: Product[];
}
