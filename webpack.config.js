const path = require('path');
const ENTRY_PATH = path.resolve(__dirname, 'client', 'src', 'index.js')
const OUTPUT_PATH = path.resolve(__dirname, 'public')

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: OUTPUT_PATH,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/present-env', '@babel/preset-react']
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  resolve: {
    extension: ['.js', '.jsx']
  }
}
