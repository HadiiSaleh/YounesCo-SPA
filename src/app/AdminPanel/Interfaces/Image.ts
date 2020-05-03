import { Color } from './Color';

export interface Image {
  imageId: number;
  colorId?: number;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  isMain: boolean;
}
