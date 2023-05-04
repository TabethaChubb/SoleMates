import React, { useState } from "react";
import "./NavBar.css";

export function NavBar(): JSX.Element {
    type role = "Customer" | "Employee" | "Owner";
    const [role, setRole] = useState<role>();

    return (
        <div className="App">
            <nav>
                <div className="dropdown">
                    <button className="dropbtn">Select User: {role}</button>
                    <div className="dropdown-content">
                        <p>
                            <button onClick={() => setRole("Customer")}>
                                Customer
                            </button>
                        </p>
                        <p>
                            <button onClick={() => setRole("Employee")}>
                                Employee
                            </button>
                        </p>
                        <p>
                            <button onClick={() => setRole("Owner")}>
                                Owner
                            </button>
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    );
}
