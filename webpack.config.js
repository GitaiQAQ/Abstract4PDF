var path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  externals: {
    'Promise': 'bluebird',
    'pdfmake/build/pdfmake': 'pdfMake',
    'html2canvas': 'html2canvas',
    'canvg': 'canvg'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          /*{
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env"],
              plugins: ['@babel/plugin-transform-runtime']
            }
          },*/
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js']
  },
  output: {
    filename: 'abstract4pdf.js?[chunkhash]',
    path: path.resolve(__dirname, './dist')
  }
};