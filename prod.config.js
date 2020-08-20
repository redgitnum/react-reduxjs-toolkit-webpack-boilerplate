const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  devtool: "hidden-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/main.[hash].bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.[hash].bundle.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
        },
      },
    ],
  },
};
