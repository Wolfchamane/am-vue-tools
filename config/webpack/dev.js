const config = require('../index');
const base = require('./base');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

base.devServer = {
    clientLogLevel     : 'warning',
    contentBase        : false,
    compress           : true,
    historyApiFallback : {
        rewrites : [
            {
                from : /.*/,
                to   : path.posix.join(config.assetsPublicPath, 'index.html')
            }
        ]
    },
    hot     : true,
    host    : 'localhost',
    port    : 3000,
    open    : true,
    overlay : {
        warnings : false,
        errors   : true
    },
    publicPath   : config.assetsPublicPath,
    proxy        : {},
    quiet        : true, // Necesario para FriendlyErrorsPlugin
    watchOptions : {
        poll : true
    }
};

base.plugins = base.plugins.concat([
    new FriendlyErrorsWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename : 'index.html',
        template : 'index.html',
        inject   : true
    }),
    new CopyWebpackPlugin([
        {
            from   : path.resolve('static'),
            to     : config.assetsSubDirectory,
            ignore : ['.*']
        }
    ])
]);

module.exports = base;
