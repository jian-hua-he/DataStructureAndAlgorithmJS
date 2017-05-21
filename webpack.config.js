const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        Assembly: './src/Assembly.js',
        Dictionary: './src/Dictionary.js',
        DoublyLinkedList: './src/DoublyLinkedList.js',
        HashTable: './src/HashTable.js',
        LinkedList: './src/LinkedList.js',
        Queue: './src/Queue.js',
        Stack: './src/Stack.js',
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