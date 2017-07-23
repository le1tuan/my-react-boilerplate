var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
const  extractSass  = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
module.exports = {
    entry: 
    [
        "./src/myapp.js",
        "babel-polyfill",
    ],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ""
    },
    module:{
        rules: [
            {
                test:  /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env","react"],
                        plugins: [require('babel-plugin-transform-object-rest-spread'),require('babel-plugin-transform-class-properties')]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.sass$/,
                use: ['css-loader',"sass-loader","style-loader"],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpg|png|gif)$/,
                loaders: [
                    'file-loader',
                    {
                    loader: 'image-webpack-loader',
                    query: {
                        mozjpeg: {
                            progressive: true,
                        },
                        gifsicle: {
                            interlaced: false,  
                        },
                        optipng: {
                            optimizationLevel: 7,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4,
                        },
                    },
                    },
                ],
            }   
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        extractSass
    ]
}