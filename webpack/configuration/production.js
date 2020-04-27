const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./common');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'application.js',
        publicPath: './',
        path: path.resolve('dist'),
        chunkFilename: 'vendor-[id]-[contenthash].js'
    },
    performance: {
        maxAssetSize: 750000,
        maxEntrypointSize: 1500000,
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name(module, chunks, cacheGroupKey) {
                  const moduleFileName = module.identifier().split('/').reduceRight(item => item);
                  const allChunksNames = chunks.map((item) => item.name).join('~');
                  return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
                },
                chunks: 'all'
              }
            }
        }
    },
    plugins: [
      new CleanWebpackPlugin(),
    ]
});
