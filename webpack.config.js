const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');




const sassRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    "sass-loader",
  ],
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      sassRules
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Title fo your project',
    template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css"
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        sourceMap: true,
      }),
    ]
  },

  devtool: 'source-map',
}