import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Sneaker } from "./interfaces/Sneaker";

const sneakers: Sneaker[] = [];

export function addShoe(): JSX.Element {
    const [allOptions] = useState<Sneaker[]>(sneakers);
    const [sneakerList, setSneakerList] = useState<Sneaker[]>([]);

    function addSneaker(newSneaker: Sneaker){
        if (!sneakers.includes(newSneaker)) {
            const newList = [...sneakerList, newSneaker];
            setSneakerList(newList);
        }
    }

    function clearList() {
        setSneakerList([]);
    }

    return (
        <div>
            <h3>Create wishlist</h3>
            <Row>
                <Col>
                    {allOptions.map((sneak: Sneaker) => (
                        <div key={sneak} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button onClick={() => addSneaker(sneak)} size="sm">
                                {sneak}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>WishList:</strong>
                    {sneakerList.map((sneak: Sneaker) => (
                        <li key={sneak}>{sneak}</li>
                    ))}
                    <Button onClick={clearList}>Clear List</Button>
                </Col>
            </Row>
        </div>
    );
}
