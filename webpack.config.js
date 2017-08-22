const path = require('path');
const  webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, './client/app.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/js')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  // PLUGINS BELOW REDUCE BUNDLE SIZE FOR PRODUCTION
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false
    }), //minify
    new webpack.optimize.AggressiveMergingPlugin()//Merging chunks
  ],
  resolve: {
    alias: {
      // alias for the components
    }
  },
  // devtool: 'cheap-module-eval-source-map'
}