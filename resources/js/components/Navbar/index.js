import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const index = props => {
    return (
        <React.Fragment>
            <li class="logo">
                <a href="#">Cipies</a>
            </li>
            {props.guest ? (
                <React.Fragment>
                    <li class="item">
                        <a href="#">Login</a>
                    </li>
                    <li class="item">
                        <a href="#">Register</a>
                    </li>
                </React.Fragment>
            ) : (
                <li class="item">
                    <InertiaLink href={route("logout")} method="POST">
                        Logout
                    </InertiaLink>
                </li>
            )}
        </React.Fragment>
    );
};

export default index;
