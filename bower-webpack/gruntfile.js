'use strict';

var webpack = require('webpack');
var path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            someName: {
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
                    new BowerWebpackPlugin()
                ],
                keepalive: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');

    grunt.registerTask('default', [
        'webpack'
    ]);

};