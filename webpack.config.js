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
					},

					{
						test: /\.css$/,
						loader: 'style-loader'
					}, {
						test: /\.css$/,
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
					
      ]
  },
  resolve:{
      extensions:[".js",".jsx",".css"]
  }
}
