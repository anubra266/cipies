const mix = require("laravel-mix");

mix.react("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .webpackConfig({
        output: { chunkFilename: "js/[name].js?id=[chunkhash]" },
        resolve: {
            alias: {
                //* for ~ imports
                "~": path.resolve("resources/js"),
            },
        },
    })
    //* version the bundles
    .version()
    .disableNotifications();
