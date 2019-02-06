const path = require('path');

module.exports = {
 entry: path.join(__dirname, '/client/src/index.jsx'), // string | object | array  // defaults to './src'
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist')
  },
  mode: "development",
  module:{
      rules: [
          {
              loader: "babel-loader",
              test: /\.js[x]?/,
              exclude: /node_modules/,
              options: {
                  presets: ["@babel/preset-env","@babel/preset-react"]
              }
          }
      ]
  },
  resolve:{
      extensions:[".js",".jsx"]
  }
}
