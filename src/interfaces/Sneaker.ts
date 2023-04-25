import { NumberLiteralType } from "typescript";

export interface Sneaker {
    brand: string;
    name: string;
    color: string;
    size: number;
    relatedShoes: [Sneaker];
    image: string;
}
