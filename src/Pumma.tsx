/* eslint-disable @typescript-eslint/no-unused-vars */
import { Sneaker } from "./interfaces/sneaker";
import MainInventory from "./CentralList";

const PummaSneaks: Sneaker[] = MainInventory.filter(
    (sneak: Sneaker): boolean => sneak.brand == "Puma"
);

export default PummaSneaks;
