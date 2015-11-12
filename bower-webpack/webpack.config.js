'use strict';

var webpack = require('webpack');
var path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
    devtool : 'source-map',
    entry: {
        app: ['webpack/hot/dev-server', './app/bootstrap-app.js']
    },
   output: {
    path: __dirname,
    filename: 'bundle.js'
  },
    module: {
        loaders: [
            { test: /\.less$/, loader: 'style!css?sourceMap!less' },
            { test: /\.css$/, loader: 'style!css?sourceMap' }
        ]
    },
  plugins: [  
    new BowerWebpackPlugin(), new webpack.HotModuleReplacementPlugin()
  ]
};
