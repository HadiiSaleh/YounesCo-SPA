import { Color } from "./Color";

export interface Image {
    imageId?: number;
    colorId: number;
    color: Color;
    imageSource: string;
    createdAt?: Date;
    updatedAt?: Date;
    default: boolean;
}