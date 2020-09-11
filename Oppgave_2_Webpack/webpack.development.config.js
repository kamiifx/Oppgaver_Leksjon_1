const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.config');

module.exports = merge(common,{
    mode: 'development',
    devServer: {
        contentBase : path.resolve(__dirname, 'public'),
        historyApiFallback : true,
    },
});