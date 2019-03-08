const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index-bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
     rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: "babel-loader"
	        }
	      }
     ]
   },
   resolve: {
   		extensions: ['.js', '.es6']
   },
   watch: true,
   mode: "development"
};