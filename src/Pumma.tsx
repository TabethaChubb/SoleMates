/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import R1 from "../src/images/airf.jpg";
import Superliga from "../src/images/Superliga.png";
import contemptdemi from "../src/images/ContemptDemi.jpg";
import deviate from "../src/images/RiseNITRONephrite.jpg";
import Foreverrun from "../src/images/ForeverRUN.jpg";
import Pwr from "../src/images/PWR.jpg";
import puma180 from "../src/images/PUMA180.jpg";
import CAProClassi from "../src/images/CAProClassi.jpg";

const PummaSneaks: Sneaker[] = [
    {
        model: "Super Liga OG Retro Sneakers",
        colors: ["Cloud white", "black", "Solar Red", "Blue", "grey"],
        selectedColor: "",
        brand: "Puma",
        size: [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12
        ],
        selectedSize: NaN,
        price: 190,
        outOfStock: false,
        image: Superliga
    },
    {
        model: "Contempt Demi Men's Training Shoes",
        colors: ["white", "black", "ultra-grey", "yellow", "orange"],
        selectedColor: "",
        brand: "Puma",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        selectedSize: NaN,
        price: 60,
        outOfStock: false,
        image: contemptdemi
    },
    {
        model: "Rise NITRO Nephrite",
        colors: [
            "warm-white",
            "black",
            "arisian-nightfrosted-ivory",
            "yellow",
            "white-earth-frosted Ivory"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        selectedSize: NaN,
        price: 130,
        outOfStock: false,
        image: deviate
    },
    {
        model: "Slipstream Always On Sneakers",
        colors: [
            "warm-white",
            "arisian-nightfrosted-ivory",
            "white-earth-frosted Ivory"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
        selectedSize: NaN,
        price: 85,
        outOfStock: false,
        image: R1
    },
    {
        model: "Deviate NITRO 2",
        colors: [
            "black",
            "royal saphire",
            "white-earth-frosted Ivory",
            "electric purple",
            "puma black"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5],
        selectedSize: NaN,
        price: 160,
        outOfStock: false,
        image: deviate
    },

    {
        model: "ForeverRUN NITRO",
        colors: [
            "black",
            "puma-white",
            "royal saphire",
            "white-earth-frosted Ivory",
            "electric purple",
            "puma black",
            "lime ultra",
            "orange"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14
        ],
        selectedSize: NaN,
        price: 150,
        outOfStock: false,
        image: Foreverrun
    },
    {
        model: "PWR XX NITRO Nova Shine",
        colors: ["puma-white"],
        selectedColor: "",
        brand: "Puma",
        size: [
            4, 4.5, 5, 5.5, 6, 6.6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14
        ],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: Pwr
    },
    {
        model: "PUMA-180 Sneakers",
        colors: ["puma-white", "vapor-grey", "black", "grey-choclate"],
        selectedColor: "",
        brand: "Puma",
        size: [
            7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14
        ],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: puma180
    },
    {
        model: "CA Pro Classi",
        colors: [
            "puma-white",
            "puma-black",
            "vapor-grey",
            "black",
            "grey-choclate"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [
            4, 4.5, 5, 5.5, 6, 6.6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14
        ],
        selectedSize: NaN,
        price: 80,
        outOfStock: false,
        image: CAProClassi
    },
    {
        model: "Clyde Base Sneakers",
        colors: [
            "puma-white",
            "vapor-grey",
            "white-frosted-ivory",
            "black",
            "gold",
            "grey-choclate"
        ],
        selectedColor: "",
        brand: "Puma",
        size: [
            4, 4.5, 5, 5.5, 6, 6.6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12, 12.5, 13, 13.5, 14
        ],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: R1
    }
];

export default PummaSneaks;
