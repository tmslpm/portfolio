const { defineConfig } = require("@vue/cli-service");
const path = require('path');

console.log(`Preset file path ${__filename}`);

module.exports = defineConfig({
  publicPath: "./",
  integrity: process.env.NODE_ENV !== "development",
  filenameHashing: false,

  /* add alias folder */
  configureWebpack: {
    resolve: {
      alias: {
        '@json': path.resolve(__dirname, 'json/'),
      }
    },

    plugins: [
    ]
  }
});
