const path = require('path');

const ENTRY_PATH = path.resolve(__dirname, 'client', 'src', 'index.jsx');
const OUTPUT_PATH = path.resolve(__dirname, 'public');

const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: 'carouselApp.js',
  },
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
