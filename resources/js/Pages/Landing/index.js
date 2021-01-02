import React from "react";

const Home = () => {
    return (
        <div>
            <b>Cipies</b> - <a href={route("register")}>Register</a> -{" "}
            <a href={route("login")}>Login</a>
        </div>
    );
};

export default Home;
