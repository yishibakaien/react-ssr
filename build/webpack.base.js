const path = require('path')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),

    // 这里要加后面那个 '/' 否则导致热更新 js 加载路径不正确
    // 但是我这里不加也是可以的。。。
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
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
  }
}
