const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: 'development',
  entry: ['./src/index.js', './src/ui.js'],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader',]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          emmiFile: true,
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './src/register.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: './src/dashboard.html'
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" })
  ],
}