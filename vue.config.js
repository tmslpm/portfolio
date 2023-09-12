const { defineConfig } = require("@vue/cli-service");

console.log(`Preset file path ${__filename}`);

module.exports = defineConfig({
  publicPath: "./",
  integrity: process.env.NODE_ENV !== "development",
  filenameHashing: false,

  /* add alias folder */
  configureWebpack: {
    resolve: {
      alias: {}
    },

    plugins: [
    ]
  }
});
