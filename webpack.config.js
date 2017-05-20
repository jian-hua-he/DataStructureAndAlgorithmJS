const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        Assembly: './src/Assembly.js',
        Stack: './src/Stack.js',
        Queue: './src/Queue.js',
        LinkedList: './src/LinkedList.js',
        DoublyLinkedList: './src/DoublyLinkedList.js',
        baseConverter: './src/baseConverter.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
};