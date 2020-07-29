const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    modules: [path.resolve(__dirname), "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ filename: "index.html" }),
  ]
};
