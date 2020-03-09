const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    performance: {
        maxEntrypointSize: 3000000,
        maxAssetSize: 3000000
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CompressionPlugin()
    ]
});