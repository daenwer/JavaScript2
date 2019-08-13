var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
// dist/ - by default
        filename: "./bundle.js"

    },
    module: {
        rules: [
            {
                test: /.\js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
        historyApiFallback: true
    },
    watch: true
};