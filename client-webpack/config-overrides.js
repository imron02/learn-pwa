const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  if (env === "production") {
    config.plugins.push(
      new InjectManifest({
        swSrc: path.join(__dirname, 'src', 'custom-sw.js')
      })
    );
  }

  return config;
};