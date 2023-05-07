/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import R1 from "../src/images/airf.jpg";
import Superliga from "../src/images/Superliga.png";
import SuperStarAdv from "../src/images/SuperStarAdv.jpg";
import Solarcontrol from "../src/images/Solarcontrol.jpg";
import NMD_V3 from "../src/images/NMD_V3.jpg";
import ForumLow from "../src/images/ForumLow.jpg";
import NIZZAPlatformW from "../src/images/NIZZA Platform W.jpg";
import NMD_R1RefinedShoe from "../src/images/NMD_R1 Refined Shoe.jpg";
import StanSmith from "../src/images/StanSmith.jpg";
const AdidasSneaks: Sneaker[] = [
    {
        model: "Super Liga OG Retro Sneakers",
        colors: ["Cloud white", "black", "Solar Red", "Blue", "grey"],
        brand: "Adidas",
        size: [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12
        ],
        price: 190,
        outOfStock: false,
        image: Superliga
    },
    {
        model: "Superstar ADV",
        colors: ["white", "black", "Red", "Orange"],
        brand: "Adidas",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        price: 100,
        outOfStock: false,
        image: SuperStarAdv
    },
    {
        model: "Solarcontrol Running Shoes",
        colors: ["Crystal white", "Core black", "Red", "Shadow Navy", "orange"],
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13,
            13.5, 14, 15.5, 15
        ],
        price: 130,
        outOfStock: false,
        image: Solarcontrol
    },
    {
        model: "NMD_V3",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        brand: "Adidas",
        size: [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12
        ],
        price: 170,
        outOfStock: false,
        image: NMD_V3
    },
    {
        model: "Forum Low",
        colors: ["Cloud White"],
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        price: 110,
        outOfStock: false,
        image: ForumLow
    },
    {
        model: "NIZZA Platform W",
        colors: ["Cloud White", "Core Black", "Gold"],
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        price: 85,
        outOfStock: false,
        image: NIZZAPlatformW
    },
    {
        model: "NMD_R1 Refined Shoe",
        colors: ["Cloud White", "Core Black"],
        brand: "Adidas",
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
        price: 140,
        outOfStock: false,
        image: NMD_R1RefinedShoe
    },
    {
        model: "NMD_R1 Refined Shoe",
        colors: ["Cloud White", "Core Black"],
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13
        ],
        price: 200,
        outOfStock: false,
        image: NMD_R1RefinedShoe
    },
    {
        model: "Stan Smith Shoes",
        colors: ["Cloud White", "Core Black", "Chalk White"],
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        price: 100,
        outOfStock: false,
        image: StanSmith
    },
    {
        model: "Stan Smith Shoes",
        colors: ["Cloud White", "Core Black", "Chalk White", "Royal Blue"],
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        price: 110,
        outOfStock: false,
        image: StanSmith
    }
];
export default AdidasSneaks;
