const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/'],
  output: {
    chunkFilename: '[name].js'
  },
  resolveLoader: {
    modules: [
      'node_modules',
      'loaders'
    ]
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: ['property-filter-loader', 'custom-json-loader'],
        type: "javascript/auto"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
}