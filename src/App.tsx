/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import nikeAirMax from "../src/images/anthony-a-JldH_vLwdYs-unsplash.jpg";
import adidas from "../src/images/1.png";
import nike from "../src/images/2.png";
import puma from "../src/images/3.png";
import { Sneaker, role } from "./interfaces/sneaker";
import { WishList } from "./userWishList";
import logo from "../src/images/soleMatesLogo.jpg";
import R1 from "../src/images/R1.png";
import s1 from "../src/images/s1.jpg";

function App(): JSX.Element {
    const [currList, setWishList] = useState<Sneaker[]>([
        {
            model: "Air Max",
            brand: "Nike",
            size: [1, 7, 9, 10],
            price: 120,
            image: nikeAirMax,
            outOfStock: false,
            colors: ["orange", "black"]
        }
    ]);
    const [currRole, setRole] = useState<role>();

    // function removeSneakerWish(event: React.ChangeEvent<HTMLInputElement>) {
    //     setWishList(
    //         currList.filter(
    //             (shoe: Sneaker): boolean =>
    //         )
    //     );
    // }

    //Used for all buckets/draggable elements
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedSneaker = JSON.parse(
            event.dataTransfer.getData("application/json")
        ) as Sneaker;
        setWishList([...currList, droppedSneaker]);
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="App">
            <head>
                <title>Navpage mockup</title>
            </head>

            <body>
                <nav>
                    <div className="dropdown">
                        <button className="dropbtn">
                            Select User: {currRole}
                        </button>
                        <div className="dropdown-content">
                            <a href="customer">Customer</a>
                            <a href="employee">Employee</a>
                            <a href="owner">Owner</a>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                        <li>
                            <a href="">Bucket?</a>
                        </li>
                    </ul>
                    <div
                        className="wishlistAddDrop-Zone"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        Drop Shoe to Add to Wishlist ⭐
                    </div>
                </nav>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <header>
                    <div className="bg">
                        <div className="content">
                            <div className="kolom">
                                <div className="a">
                                    <img src={adidas} />
                                </div>
                                <div className="b">
                                    <a href="#adidas">ADIDAS</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={nike} />
                                </div>
                                <div className="b">
                                    <a href="#nike">NIKE</a>
                                </div>
                            </div>
                            <div className="kolom">
                                <div className="a">
                                    <img src={puma} />
                                </div>
                                <div className="b">
                                    <a href="#puma">PUMA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <footer className="ADIDAS">
                    <div id="adidas">
                        <h1>ADIDAS</h1>
                    </div>
                    <div className="drop">
                        <button className="sneaker1">
                            <a href="addi1">
                                <img src={R1}></img>
                            </a>
                            <div className="ad1">R1</div>
                        </button>
                        <button className="addi2">
                            <a href="addi2">
                                <img src={s1}></img>
                            </a>
                            <div className="add2">Superstar</div>
                            <div className="add2"></div>
                        </button>
                    </div>
                </footer>
                <footer className="NIKE">
                    <div id="nike"></div>
                    <h1>NIKE</h1>
                    <a href="Air Force 1">Air force 1</a>
                </footer>
                <footer className="PUMA">
                    <div id="puma"></div>
                    <h1>PUMA</h1>
                </footer>
            </body>
            <footer className="WISHLIST">
                <WishList sneakers={currList} />
            </footer>
        </div>
    );
}

export default App;
