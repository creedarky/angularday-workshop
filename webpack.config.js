'use strict';


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
      path: __dirname + '/dist',
      pathinfo: !isProd,
    },
    devtool: isProd ? 'source-map' : 'inline-source-map',
    bail: isProd, // detect any error as hard error
    module: {
      loaders: [
        // {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
        {test: /\.css$/, loader: 'style!css'},
      ],
    },
  };




  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  // config.devServer = {
  //   contentBase: './src/public',
  //   stats: 'minimal',
  //   proxy: {
  //     '/api/*': {
  //       target: 'http://localhost:9000/'
  //     }
  //   }
  // };

  return config;
}();
