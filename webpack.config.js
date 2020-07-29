const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("./webpack.common.config.js");

module.exports = merge(webpackConfig, {
  mode: "none",
  entry: {
    "main": ["./styles/main.scss", "./src/index.js"],
    "main-polyfills": ["core-js/stable", "regenerator-runtime/runtime", "whatwg-fetch", "./src/index.js"],
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  corejs: 3
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              // webpack requires an identifier (ident) in options when {Function}/require is used (Complex Options).
              // The ident can be freely named as long as it is unique. It's recommended to name it (ident: 'postcss')
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")(),
//                require("cssnano")()
              ]
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});
