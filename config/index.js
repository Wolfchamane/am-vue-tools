const isPro = require('node-env-tools').isPro();
const path = require('path');

module.exports = {
    assetsPublicPath    : isPro ? './' : '/',
    assetsSubDirectory  : '',
    assetsRoot          : path.resolve(isPro ? 'dist' : 'static'),
    devtool             : isPro ? '#source-map' : 'cheap-module-eval-source-map',
};
