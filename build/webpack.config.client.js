
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  // mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/template.html')
    })
  ]
}

if (isDev) {
  config.devServer = {
    host: '0.0.0.0', // 比较安全的本机 ip 兼容性较好，方便与别人联调
    port: '8888',
    contentBase: path.join(__dirname, '../dist'),
    // hot: true,
    overlay: {
      errors: true // 编译时出现错误，网页中显示错误蒙层
    },
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html'
    }
  }
}

module.exports = config
