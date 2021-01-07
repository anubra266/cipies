import React, { useState } from "react";
import { Row, Col } from "antd";
import "./index.css";
import Curve from "./curve";
import Navbar from "~/components/Navbar";
const index = props => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(status => !status);
    return (
        <div class="wave-container">
            <div className="playout-header">
                <div className="pnavbar">
                    <nav>
                        <ul class={`menu ${open && "active"}`}>
                            <Navbar guest={props.guest} />

                            <li class="toggle" onClick={toggleMenu}>
                                <a href="#">{open ? "CLOSE" : "OPEN"}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="papp">
                <Curve />
                <div className="ppage">
                    <Row justify="center">
                        <Col
                            xs={{ span: 20 }}
                            md={{ span: 12 }}
                            lg={{ span: 9 }}
                        >
                            {props.children}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default index;
