/* eslint-disable */
var path = require('path');
var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.(eot|png|ttf|svg|woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: [
            root,
            'node_modules'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map'
};
