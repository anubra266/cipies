import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

const Home = () => {
    return (
        <div>
            <b>Cipies</b> -{" "}
            <InertiaLink href={route("register")}>Register</InertiaLink> -{" "}
            <InertiaLink href={route("login")}>Login</InertiaLink>
        </div> 
    );
};

export default Home;
