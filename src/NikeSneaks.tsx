/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import MainInventory from "./CentralList";

const NikeSneaks: Sneaker[] = MainInventory.filter(
    (sneak: Sneaker): boolean => sneak.brand == "Nike"
);

export default NikeSneaks;
