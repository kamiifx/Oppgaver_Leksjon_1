const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname,'public'),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,    //Vis skal ikke ha med denne i builden. Derfor excluder jeg den.
                loader: 'babel-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        }),
    ],
    resolve: {
        extensions: [".js",".scss"],
    }
};