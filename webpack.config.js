/**
 
    webpack.config.js
    webpack configuration for module loading of the app

 */

 //imports 
const webpack = require('webpack');
const excludeNode = /node_modules/;
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
           
//configurations
const webpackHtmlJSPluginconfig = new htmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

let webpackConfiguration = {
    entry: './src/app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app-bundle.js',
    },
    devtool: 'source-map',
    module: {
        loaders: 
        [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: excludeNode
        },{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: excludeNode
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }]
    },
    //plugins
    plugins: [webpackHtmlJSPluginconfig, new ExtractTextPlugin('./main.css', {
            allChunks: true
    })]
}

 module.exports = webpackConfiguration;