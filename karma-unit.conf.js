const webpackConfig = require("./webpack.common.config.js");

const isDebug = process.argv.some(value => value === "--debug");
const useFF = process.argv.some(value => value === "--firefox");
const browsers = useFF
  ? isDebug
    ? ["Firefox"]
    : ["FirefoxHeadless"]
  : isDebug
    ? ["Chrome"]
    : ["ChromeHeadless"];

module.exports = function(config) {
  config.set({
    singleRun: !isDebug,
    browsers: browsers,
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
