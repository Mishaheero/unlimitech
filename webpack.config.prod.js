const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge.merge(baseConfig, {
    entry: {
        main: './src/app/app.js'
    },
    devtool: false,
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
});