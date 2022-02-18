const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  // SE AGREGO mode
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
// puerto
  devServer:{
    port:5000

  },

// se agrega el html a la carpeta dist
  plugins: [
   
    new HtmlWebpackPlugin({
      template: './index.html'
  })]
};