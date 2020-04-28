const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        watchContentBase: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
