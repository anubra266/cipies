import { App } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// import "antd/dist/antd.css";
import "../css/app.css";
import { useProgressBar } from "./components/ProgressBar";
const el = document.getElementById("app");
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark"
};
const customTheme = extendTheme({ config });
useProgressBar();
render(
    <ChakraProvider theme={customTheme}>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={name =>
                import(`~/Pages/${name}`).then(module => module.default)
            }
        />
    </ChakraProvider>,
    el
);
