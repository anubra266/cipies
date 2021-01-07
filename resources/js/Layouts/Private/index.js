import React, { useState } from "react";
import "./index.css";
const index = props => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(status => !status);
    return (
        <div class="wave-container">
            <div className="playout-header">
                <div className="pnavbar">
                    <nav>
                        <ul class={`menu ${open && "active"}`}>
                            <li class="logo">
                                <a href="#">Cipies</a>
                            </li>
                            <li class="item">
                                <a href="#">Home</a>
                            </li>
                            <li class="item">
                                <a href="#">About</a>
                            </li>
                            <li class="toggle" onClick={toggleMenu}>
                                <a href="#">{open ? "CLOSE" : "OPEN"}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="rgb(18, 50, 107)"
                    fill-opacity="1"
                    d="M0,128L120,144C240,160,480,192,720,181.3C960,171,1200,117,1320,90.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
            </svg>
            <div className="page">{props.children}</div>
        </div>
    );
};

export default index;
