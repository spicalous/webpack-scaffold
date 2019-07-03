const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("./webpack.common.config.js");

module.exports = merge(webpackConfig, {
  mode: "development",
  entry: ["./styles/main.scss", "./src/index.js"],
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});
