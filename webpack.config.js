const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const dotEnv = require("dotenv-webpack");

const SRC_DIR = __dirname + '/src/';
const DIST_DIR = __dirname + '/dist/';

module.exports = {
    entry: SRC_DIR + "index.js",

    output: {
        path: DIST_DIR,
        filename: "[hash]bundle.js",
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader")
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', 'ts']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),

        new dotEnv({
            systemvars: true,
        })
    ],

    devServer: {
        hot: true,
        open: true,
        port: 8080,
        historyApiFallback: true,
    }
}