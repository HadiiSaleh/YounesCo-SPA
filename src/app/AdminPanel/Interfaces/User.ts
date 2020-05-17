import { Address } from './Address';
import { Order } from './Order';
import { Favorite } from './Favorite';

export interface User {
  id?: string;
  userName: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  displayName?: string;
  email: string;
  phoneNumber: string;
  location: Address;
  createdAt?: Date;
  updatedAt?: Date;
  role?: string;
  deleted: boolean;
  orders?: Order[];
  favorites?: Favorite[];
  password?: string;
  confirmPassword?: string;
}
