/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import SuperStarAdv from "../src/images/SuperStarAdv.jpg";
import Solarcontrol from "../src/images/Solarcontrol.jpg";
import NMD_V3 from "../src/images/NMD_V3.jpg";
import ForumLow from "../src/images/ForumLow.jpg";
import NIZZAPlatformW from "../src/images/NIZZA Platform W.jpg";
import NMD_R1RefinedShoe from "../src/images/NMD_R1 Refined Shoe.jpg";
import StanSmith from "../src/images/StanSmith.jpg";
import fo from "../src/images/fo.jpg";
import DFWD from "../src/images/DFWD.jpg";
import Airforce from "../src/images/Airforce.jpg";
import Airmax270 from "../src/images/Airmax270.jpg";
import Airmax90 from "../src/images/Airmax90.jpg";
import Jordan5 from "../src/images/Jordan5.jpg";
import Jordantrueflight from "../src/images/Jordantrueflight.jpg";
import Vapormax from "../src/images/Vapormax.jpg";
import Jordan9 from "../src/images/Jordan9.jpg";
import Jordan11 from "../src/images/Jordan11.jpg";
import Jordan12 from "../src/images/Jordan12.jpg";
import Huarache from "../src/images/Huarache.jpg";
import Superliga from "../src/images/Superliga.png";
import contemptdemi from "../src/images/ContemptDemi.jpg";
import deviate from "../src/images/RiseNITRONephrite.jpg";
import Foreverrun from "../src/images/ForeverRUN.jpg";
import Pwr from "../src/images/PWR.jpg";
import puma180 from "../src/images/PUMA180.jpg";
import CAProClassi from "../src/images/CAProClassi.jpg";
import pumaclyde from "../src/images/pumaclyde.jpg";
import pumaslip from "../src/images/pumaslip.jpg";
import pumanitro from "../src/images/pumanitro.jpg";
import gts from "../src/images/gts.jpg";

const MainInventory: Sneaker[] = [
    {
        model: "Superstar ADV",
        colors: ["white", "black", "Red", "Orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: SuperStarAdv
    },
    {
        model: "Solarcontrol Running Shoes",
        colors: ["Crystal white", "Core black", "Red", "Shadow Navy", "orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13,
            13.5, 14, 15.5, 15
        ],
        selectedSize: NaN,
        price: 130,
        outOfStock: false,
        image: Solarcontrol
    },
    {
        model: "NMD_V3",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5,
            12
        ],
        selectedSize: NaN,
        price: 170,
        outOfStock: false,
        image: NMD_V3
    },
    {
        model: "Forum Low",
        colors: ["Cloud White"],
        selectedColor: "",
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        selectedSize: NaN,
        price: 110,
        outOfStock: false,
        image: ForumLow
    },
    {
        model: "NIZZA Platform W",
        colors: ["Cloud White", "Core Black", "Gold"],
        selectedColor: "",
        brand: "Adidas",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        selectedSize: NaN,
        price: 85,
        outOfStock: false,
        image: NIZZAPlatformW
    },
    {
        model: "NMD_R1 Refined Shoe",
        colors: ["Cloud White", "Core Black"],
        selectedColor: "",
        brand: "Adidas",
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
        selectedSize: NaN,
        price: 140,
        outOfStock: false,
        image: NMD_R1RefinedShoe
    },
    {
        model: "4DFWD",
        colors: ["Cloud White", "Core Black", "halo silver"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13
        ],
        selectedSize: NaN,
        price: 200,
        outOfStock: false,
        image: DFWD
    },
    {
        model: "Stan Smith Shoes",
        colors: ["Cloud White", "Core Black", "Chalk White"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        selectedSize: NaN,
        price: 100,
        outOfStock: false,
        image: StanSmith
    },
    {
        model: "Forum Midd",
        colors: ["Cloud White", "Blue", "Brown", "Royal Blue"],
        selectedColor: "",
        brand: "Adidas",
        size: [
            5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
            12.5, 13
        ],
        selectedSize: NaN,
        price: 110,
        outOfStock: false,
        image: fo
    },
    {
        model: "Air Force",
        colors: ["white", "black", "Red", "Light Blue", "orange"],
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
        price: 90,
        outOfStock: false,
        image: Airforce
    },
    {
        model: " Air Max 270",
        colors: ["white", "black", "Red", "Light Blue", "orange", "purple"],
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
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
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
        price: 180,
        outOfStock: false,
        image: Jordan12
    },
    {
        model: "Huarache",
        colors: ["white", "black", "Phantom"],
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
        price: 250,
        outOfStock: false,
        image: Huarache
    },
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
        image: pumaslip
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
        image: pumanitro
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
        model: "Reto GTS",
        colors: ["white", "black", "Phantom", "Red", "Green", "yellow"],
        selectedColor: "",
        brand: "Nike",
        size: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        selectedSize: NaN,
        price: 200,
        outOfStock: false,
        image: gts
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
        image: pumaclyde
    }
];

export default MainInventory;
