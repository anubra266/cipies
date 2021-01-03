import { App } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";

// import 'bootstrap/dist/css/bootstrap.css';
import { useProgressBar } from "./ProgressBar";
const el = document.getElementById("app");

useProgressBar();
render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name =>
            import(`~/Pages/${name}`).then(module => module.default)
        }
    />,
    el
);
