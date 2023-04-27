/** SneakerType influences when a sneaker should show up on the main list since we have the brands in different sections */
export type SneakerBrand = "Nike" | "Puma" | "Adidas";
export type role = "Customer" | "Employee" | "Owner";

/** A representation of a Question in a quizzing application */
export interface Sneaker {
    /** The human-friendly model name of the sneaker */
    model: string;
    /** The list of colors that are available for a shoe */
    colors: string[];
    /** The brand of Sneaker; influences when a sneaker should show up on the main list since we have the brands in different sections */
    brand: SneakerBrand;
    /** The List of available sizes for this sneaker */
    size: number[];
    /** How much money this sneaker costs the user */
    price: number;
    /** Whether or not this sneaker is out of stock */
    outOfStock: boolean;
    /** The main image of the sneaker as a url */
    image: string;
}
