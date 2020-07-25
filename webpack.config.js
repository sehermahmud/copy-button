// const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/app.js',
//   output: {
//     filename: 'app.js',
//     path: path.resolve(__dirname, 'assets', 'scripts'),
//     publicPath: 'assets/scripts/'
//   },
//   devtool: 'cheap-module-eval-source-map',
//   // devServer: {
//   //   contentBase: './'
//   // }
//   plugins: [
//     new CleanPlugin.CleanWebpackPlugin()
//   ]
// };

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: './js/canvas.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      files: ['./dist/*'],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      style: 'assets/styles/app.css',
      template: 'src/index.html'
    })
  ],
  watch: true,
  devtool: 'source-map'
};