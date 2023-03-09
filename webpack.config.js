// webpack.config.js

const path = require('path');
const { NodePolyfillPlugin } = require('webpack-node-polyfill');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new NodePolyfillPlugin(),
  ],
};
