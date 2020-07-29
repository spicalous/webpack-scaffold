const debug = process.argv.some(value => value === "--debug");
const webpackConfig = require("./webpack.common.config.js");

//const browser = process.argv.some(value => value === "--firefox")
//  ? ["FirefoxHeadless", "Firefox"]
//  : ["ChromeHeadless", "Chrome"];

module.exports = function(config) {
  config.set({
    singleRun: !debug,
    browsers: ["FirefoxHeadless"],
    // browsers: [debug ? browser[0] : browser[1]],
    frameworks: ["mocha", "chai"],
    files: ["test/unit/**/*-test.js"],
    reporters: ["progress"],
    preprocessors: {
      "test/unit/**/*-test.js": ["webpack"]
    },
    webpack: {
      mode: "none",
      resolve: webpackConfig.resolve
    },
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    concurrency: Infinity
  });
};
