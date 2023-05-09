import { Sneaker } from "./interfaces/sneaker";
import R1 from "../src/images/airf.jpg";
import two from "../src/images/270.jpg";
import Airforce from "../src/images/Airforce.jpg";
import Airmax270 from "../src/images/Airmax270.jpg";
import Airmax90 from "../src/images/Airmax90.jpg";
import Jordan5 from "../src/images/Jordan5.jpg";
import Jordantrueflight from "../src/images/Jordantruelight.jpg";
import Vapormax from "../src/images/Vapormax.jpg";
import Jordan9 from "../src/images/Jordan9.jpg";
import Jordan11 from "../src/images/Jordan11.jpg";
import Jordan12 from "../src/images/Jordan12.jpg";
import Huarache from "../src/images/Huarache.jpg";

const NikeSneaks: Sneaker[] = [
    {
        model: "Air Force",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 90,
        outOfStock: false,
        image: Airforce
    },
    {
        model: " Air Max 270",
        colors: ["white", "black", "Red", "Light Blue", "orange", "purple"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 130,
        outOfStock: false,
        image: Airmax270
    },
    {
        model: " Air Max 90",
        colors: [
            "white",
            "black",
            "Red",
            "Purpele",
            "pink",
            "purlpe",
            "Beige",
            "yellow"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 95,
        outOfStock: false,
        image: Airmax90
    },
    {
        model: "Jordan 5",
        colors: [
            "white",
            "White Black",
            "Red-black",
            "Red",
            "Light Blue",
            "orange"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 250,
        outOfStock: false,
        image: Jordan5
    },
    {
        model: "Jordan True Flight",
        colors: [
            "white",
            "White Black",
            "Red-black",
            "Red",
            "Light Blue",
            "orange",
            "Black-Metallic"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 200,
        outOfStock: false,
        image: Jordantrueflight
    },
    {
        model: "Vapor Max",
        colors: [
            "white",
            "University Red",
            "Red-black",
            "Silver",
            "orange",
            "Green"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 210,
        outOfStock: false,
        image: Vapormax
    },
    {
        model: "Jordan 9",
        colors: [
            "white",
            "University Blue",
            "Red-black",
            "Blue",
            "Orange",
            "Cool grey"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 300,
        outOfStock: false,
        image: Jordan9
    },
    {
        model: "Jordan 11",
        colors: [
            "white",
            "University Red",
            "Red-black",
            "Black",
            "orange-White",
            "Silver"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 350,
        outOfStock: false,
        image: Jordan11
    },
    {
        model: "Jordan 12",
        colors: [
            "white",
            "University Gold",
            "Red-black",
            "Indigo",
            "orange",
            "Green"
        ],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 180,
        outOfStock: false,
        image: Jordan12
    },
    {
        model: "Huarache",
        colors: ["white", "black", "Phantom"],
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 250,
        outOfStock: false,
        image: Huarache
    }
];
export default NikeSneaks;
