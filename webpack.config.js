'use strict';
var webpack = require('webpack');


/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isProd = ENV === 'build:prod';

module.exports = function makeWebpackConfig () {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {
    entry: './app/app.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/app/dist',
      pathinfo: !isProd,
      publicPath: '/' // route used by webpack dev server to serve bundles
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    bail: isProd, // detect any error as hard error
    module: {
      loaders: [
        {test: /\.js$/, loader: 'babel', exclude: [/node_modules/, /bower_components/]},
        {test: /\.css$/, loader: 'style!css'},
        {test: /\.html$/, loader: 'raw' }, //Transform to string an element
      ],
    },
    plugins: []
  };

  //support other kinds of modules
  config.resolve = {
    modulesDirectories: ["node_modules", "bower_components"]
  };

  //supports bower
  config.plugins.push(
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
    )
  );

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './app',
    // proxy: {
    //   '/api/*': {
    //     target: 'http://localhost:9000/'
    //   }
    // }
  };

  return config;
}();
