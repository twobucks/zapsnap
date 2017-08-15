var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var path = require('path')

var PROD = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: PROD ? 'bundle.min.js' : 'bundle.js'
  },
  devtool: 'source-map',
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  plugins: PROD ? [
    new UglifyJSPlugin({
      compress: { warnings: false }
    })
  ] : []
}
