'use strict';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
        {test: /\.js$/, loader: 'ng-annotate!babel', exclude: [/node_modules/, /bower_components/]},
        {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap')},
        {test: /\.html$/, loader: 'raw' }, //Transform to string an element
        {test: /mixin/, loader: 'imports?_=lodash'},
        {test: /leftpad/, loaders: ['imports?window=>{}', 'exports?leftPad']}
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


  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './app/public/index.html',
      inject: 'body'
    }), new ExtractTextPlugin('[name].[hash].css', {disable: !isProd})
  );

  if (isProd) {
    config.plugins.push(

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin(),

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([{
        from: __dirname + '/app/phones',
        to: __dirname + '/app/dist/phones'
      }, {
        from: __dirname + '/app/img',
        to: __dirname + '/app/dist/img'
      }])
    )
  }

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
