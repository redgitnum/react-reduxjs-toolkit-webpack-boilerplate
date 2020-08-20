const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    port: 3000,
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      modules: false,
    },
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log("\x1b[36m", "Listening on port:", port);
    },
  },
  entry: "./src/index.js",
  devtool: "source-map",
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
