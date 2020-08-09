const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './frontend/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/blog/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html'
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
