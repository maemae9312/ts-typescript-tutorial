const { resolve } = require("path");

module.exports = {
    entry: {
        bundle: "./src/index.ts",
    },
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
    },
    mode: "development",
    // mode: "production", 本番モード
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        static: {
            directory: `${__dirname}/dist`,
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
            },
        ],
    },
};