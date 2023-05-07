import { Sneaker } from "./interfaces/sneaker";
import inventory from "./NikeSneaks";
import AdidasSneaks from "./AddiSneaks";
import PummaSneaks from "./Pumma";

const MainInventory: Sneaker[] = [
    ...inventory,
    ...AdidasSneaks,
    ...PummaSneaks
];

export default MainInventory;
