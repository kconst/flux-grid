'use strict';
var webpack = require('webpack');

module.exports = {
    entry : './js/tests/ViewportSpec',

    output : {
      path : './js/tests',
      filename : 'spec.js',
      publicPath : '/js/tests'
    },
  debug : true/*,

    module : {
      loaders : [{
        test : /\.js$/,
        exclude : /node_modules/,
        loader : 'babel-loader'
      }]
    }*/
};
