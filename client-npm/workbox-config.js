module.exports = {
  globDirectory: './build/',
  globPatterns: [
    '\*\*/\*.{html,js}'
  ],
  swDest: './build/sw.js',
  swSrc: './src/custom-sw.js'
};