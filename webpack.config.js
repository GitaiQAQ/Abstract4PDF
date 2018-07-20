const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json')));

const banner =
`${pkg.title} ${pkg.version} <${pkg.homepage}>
Copyright (c) ${(new Date()).getFullYear()} ${pkg.author.name} <${pkg.author.email}> ${pkg.author.url}
Released under ${pkg.license} License`;

const ts_modules = {
  rules: [{
    test: /\.ts?$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'ts-loader',
      }
    ]
  }]
};

module.exports = [
  {
    entry: './src/index.ts',
    mode: "development",
    externals: {
      'Promise': 'bluebird',
      'pdfmake/build/pdfmake': 'pdfMake',
      //'html2canvas': 'html2canvas',
      //'canvg': 'canvg'
    },
    devtool: 'inline-source-map',
    module: ts_modules,
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'abstract4pdf.js',
      chunkFilename: "[name].js",
      path: path.resolve(__dirname, './dist'),
      publicPath: '/static/abstract4pdf/0.1.0/',
      library: 'abstract4pdf',
      libraryTarget: 'umd'
    }, 
    plugins: [
      new webpack.DefinePlugin({
          '__DEV__': true,
          '__VERSION__': JSON.stringify(pkg.version)
      }),
      new webpack.BannerPlugin(banner)
    ]
  }, {
    entry: './src/index.ts',
    devtool: 'none',
    mode: "production",
    externals: {
      'Promise': 'bluebird',
      'pdfmake/build/pdfmake': 'pdfMake',
      //'html2canvas': 'html2canvas',
      //'canvg': 'canvg'
    },
    module: ts_modules,
    resolve: {
      extensions: ['.ts', '.js']
    },
    output: {
      filename: 'abstract4pdf.min.js',
      chunkFilename: "[name].min.js",
      path: path.resolve(__dirname, './dist'),
      publicPath: '/static/abstract4pdf/0.1.0/',
      library: 'abstract4pdf',
      libraryTarget: 'umd'
    }, 
    plugins: [
      new webpack.DefinePlugin({
          '__DEV__': true,
          '__VERSION__': JSON.stringify(pkg.version)
      }),
      new UglifyJSPlugin(),
      new webpack.BannerPlugin(banner)
    ]
  }
];