/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import MainInventory from "./CentralList";

const AdidasSneaks: Sneaker[] = MainInventory.filter(
    (sneak: Sneaker): boolean => sneak.brand == "Adidas"
);

export default AdidasSneaks;
